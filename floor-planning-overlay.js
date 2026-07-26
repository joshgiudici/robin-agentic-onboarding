(() => {
  const STATE = {
    data: null,
    floorId: 'floor-1',
    view: 'layout',
    buildingName: 'Boston HQ',
    noticeDismissed: false,
    ready: null,
  };

  STATE.ready = fetch('./floor-planning-data.json')
    .then((r) => r.json())
    .then((data) => {
      STATE.data = data;
      return data;
    })
    .catch((err) => {
      console.error('Failed to load floor planning data', err);
      return null;
    });

  function ensureOverlay() {
    let root = document.getElementById('fp-overlay');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'fp-overlay';
    root.className = 'fp-overlay';
    root.hidden = true;
    root.innerHTML = `
      <div class="fp-shell" role="dialog" aria-modal="true" aria-label="Floor planning">
        <header class="fp-header">
          <div class="fp-header-left">
            <div class="fp-title" id="fp-title">Boston HQ</div>
          </div>
          <nav class="fp-tabs" id="fp-tabs">
            <button type="button" class="fp-tab is-active" data-view="layout">Layout</button>
            <button type="button" class="fp-tab" data-view="assignments">Assignments</button>
            <button type="button" class="fp-tab" data-view="neighborhoods">Neighborhoods</button>
          </nav>
          <div class="fp-header-right">
            <button type="button" class="fp-btn fp-btn-tertiary" id="fp-cancel">Cancel</button>
            <button type="button" class="fp-btn fp-btn-primary" id="fp-save">Save</button>
          </div>
        </header>
        <div class="fp-main">
          <aside class="fp-left">
            <div class="fp-floor-picker">
              <label class="fp-floor-label">Floor</label>
              <select id="fp-floor-select" class="fp-floor-select"></select>
            </div>
            <div id="fp-left-body" class="fp-left-body"></div>
          </aside>
          <main class="fp-center">
            <div class="fp-canvas-shell">
              <div class="fp-canvas" id="fp-canvas"></div>
            </div>
            <div class="fp-notice" id="fp-notice" role="status">
              <button type="button" class="fp-notice-dismiss" id="fp-notice-dismiss" aria-label="Dismiss">
                <svg viewBox="0 0 384 512" width="12" height="12"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
              </button>
              <div class="fp-notice-title">Your floors are ready</div>
              <div class="fp-notice-body">We set up all your floors from the maps you uploaded — drew the walls, assigned users, and built neighborhoods. Make adjustments here now, or come back anytime later.</div>
            </div>
          </main>
          <aside class="fp-right">
            <div class="fp-overview-header" id="fp-overview-header">Overview</div>
            <div id="fp-overview-body" class="fp-overview-body"></div>
          </aside>
        </div>
      </div>
    `;
    document.body.appendChild(root);

    root.querySelector('#fp-cancel').addEventListener('click', close);
    root.querySelector('#fp-save').addEventListener('click', close);
    root.querySelector('#fp-notice-dismiss').addEventListener('click', () => {
      STATE.noticeDismissed = true;
      syncNotice();
    });
    root.addEventListener('click', (e) => {
      if (e.target === root) close();
    });
    root.querySelector('#fp-tabs').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-view]');
      if (!btn) return;
      STATE.view = btn.dataset.view;
      root.querySelectorAll('.fp-tab').forEach((t) => t.classList.toggle('is-active', t === btn));
      render();
    });
    root.querySelector('#fp-floor-select').addEventListener('change', (e) => {
      STATE.floorId = e.target.value;
      render();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !root.hidden) close();
    });
    return root;
  }

  function currentFloor() {
    return STATE.data?.floors?.[STATE.floorId] || null;
  }

  function renderFloorSelect() {
    const select = document.getElementById('fp-floor-select');
    if (!select || !STATE.data) return;
    select.innerHTML = STATE.data.floorOrder
      .map((id) => {
        const f = STATE.data.floors[id];
        return `<option value="${id}" ${id === STATE.floorId ? 'selected' : ''}>${f.label}</option>`;
      })
      .join('');
  }

  const TOOL_ICONS = {
    pointer: '<svg viewBox="0 0 320 512" width="12" height="12"><path fill="currentColor" d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 8.7C34.5 5 29.1 3 23.6 3C10.6 3 0 13.6 0 26.6V55.2z"></path></svg>',
    hand: '<svg viewBox="0 0 512 512" width="12" height="12"><path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"></path></svg>',
    pencil: '<svg viewBox="0 0 512 512" width="12" height="12"><path fill="currentColor" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path></svg>',
    caret: '<svg viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>',
    caretRight: '<svg viewBox="0 0 320 512" width="10" height="10"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>',
  };

  const LAYOUT_WALL_TOOLS = [
    { label: 'Select', icon: 'pointer', active: true },
    { label: 'Pan', icon: 'hand' },
    { label: 'Draw interior wall', icon: 'pencil' },
    { label: 'Draw exterior wall', icon: 'pencil' },
  ];

  const LAYOUT_SECTIONS = [
    { label: 'Walls', open: true },
    { label: 'Spaces' },
    { label: 'Desks' },
    { label: 'Lockers' },
    { label: 'Parking Spots' },
    { label: 'Points of Interest' },
    { label: 'Furnishings' },
  ];

  function renderLeft() {
    const body = document.getElementById('fp-left-body');
    const floor = currentFloor();
    if (!body || !floor) return;

    if (STATE.view === 'layout') {
      body.innerHTML = `
        <div class="fp-toolbox">
          ${LAYOUT_SECTIONS.map(
            (sec) => `
            <div class="fp-tool-section">
              <div class="fp-tool-section-header">
                <span class="fp-tool-caret">${sec.open ? TOOL_ICONS.caret : TOOL_ICONS.caretRight}</span>
                <span>${sec.label}</span>
              </div>
              ${
                sec.open
                  ? `<div class="fp-tool-list">
                      ${LAYOUT_WALL_TOOLS.map(
                        (t) => `
                        <div class="fp-tool-row ${t.active ? 'is-active' : ''}">
                          <span class="fp-tool-icon">${TOOL_ICONS[t.icon]}</span>
                          <span>${t.label}</span>
                        </div>`
                      ).join('')}
                    </div>`
                  : ''
              }
            </div>`
          ).join('')}
        </div>
      `;
      return;
    }

    if (STATE.view === 'neighborhoods') {
      body.innerHTML = `
        <div class="fp-section-title">Neighborhoods</div>
        <div class="fp-nb-list">
          ${floor.neighborhoods
            .map(
              (n) => `
            <div class="fp-nb-row">
              <span class="fp-nb-swatch" style="background:${n.color}"></span>
              <span class="fp-nb-name">${n.name}</span>
            </div>`
            )
            .join('')}
        </div>
      `;
      return;
    }

    body.innerHTML = `
      <div class="fp-search">Search for a user</div>
      <div class="fp-dir-list">
        ${floor.directory
          .map(
            (u) => `
          <div class="fp-dir-row ${u.onThisFloor ? 'is-on-floor' : ''}">
            <span class="fp-dir-avatar" style="background:${u.avatarColor}">${u.initials}</span>
            <div class="fp-dir-meta">
              <div class="fp-dir-name">${u.name}</div>
              <div class="fp-dir-status">${u.status}</div>
            </div>
          </div>`
          )
          .join('')}
      </div>
    `;
  }

  function renderCanvas() {
    const canvas = document.getElementById('fp-canvas');
    const floor = currentFloor();
    const data = STATE.data;
    if (!canvas || !floor || !data) return;

    const desksHtml = floor.desks
      .map((d) => {
        if (STATE.view === 'layout') {
          return `<div class="fp-desk fp-desk-plain" style="left:${d.x}px;top:${d.y}px;width:${data.tileWidth}px;height:${data.tileHeight}px;"></div>`;
        }
        if (STATE.view === 'neighborhoods') {
          return `<div class="fp-desk" style="left:${d.x}px;top:${d.y}px;width:${data.tileWidth}px;height:${data.tileHeight}px;background:${d.neighborhoodColor}"></div>`;
        }
        const bg = d.assigned ? data.colors.assigned : data.colors.unassigned;
        const avatar = d.occupant
          ? `<span class="fp-desk-avatar" style="background:${d.occupant.avatarColor}">${d.occupant.initials}</span>`
          : '';
        return `<div class="fp-desk" style="left:${d.x}px;top:${d.y}px;width:${data.tileWidth}px;height:${data.tileHeight}px;background:${bg}">${avatar}</div>`;
      })
      .join('');

    const labelsHtml =
      STATE.view === 'neighborhoods'
        ? floor.labels
            .map(
              (l) =>
                `<div class="fp-nb-label" style="left:${l.x}px;top:${l.y}px;border-color:${l.labelColor || l.color};color:${l.labelColor || l.color}">${l.name}</div>`
            )
            .join('')
        : '';

    canvas.style.width = `${data.canvas.width}px`;
    canvas.style.height = `${data.canvas.height}px`;
    canvas.innerHTML = `<div class="fp-desk-layout">${desksHtml}${labelsHtml}</div>`;
  }

  function pieGradient(rows, unassigned, unassignedColor) {
    const total = rows.reduce((n, r) => n + r.count, 0) + unassigned;
    if (!total) return unassignedColor;
    let cursor = 0;
    const stops = [];
    for (const row of rows) {
      if (!row.count) continue;
      const start = (cursor / total) * 360;
      cursor += row.count;
      const end = (cursor / total) * 360;
      stops.push(`${row.color} ${start}deg ${end}deg`);
    }
    if (unassigned) {
      const start = (cursor / total) * 360;
      stops.push(`${unassignedColor} ${start}deg 360deg`);
    }
    return `conic-gradient(${stops.join(', ')})`;
  }

  function renderOverview() {
    const body = document.getElementById('fp-overview-body');
    const floor = currentFloor();
    const data = STATE.data;
    if (!body || !floor || !data) return;

    if (STATE.view === 'layout') {
      const rows = [
        ['Spaces', 20],
        ['Desks', floor.desks.length],
        ['Lockers', 0],
        ['Parking spots', 0],
        ['Points of interest', 0],
        ['Furnishing', 0],
      ];
      body.innerHTML = `
        <div class="fp-ov-rows fp-ov-rows-plain">
          ${rows.map(([label, count]) => `<div class="fp-ov-plain-row"><span>${label}</span><span>${count}</span></div>`).join('')}
        </div>
      `;
      return;
    }

    if (STATE.view === 'neighborhoods') {
      const ov = floor.overview.neighborhoods;
      body.innerHTML = `
        <div class="fp-pie-wrap"><div class="fp-pie" style="background:${pieGradient(ov.rows, ov.unassigned, data.colors.nbUnassigned)}"></div></div>
        <div class="fp-ov-rows">
          ${ov.rows
            .map(
              (r) => `
            <div class="fp-ov-row">
              <span class="fp-ov-swatch" style="background:${r.color}"></span>
              <span class="fp-ov-label">${r.name}</span>
              <span class="fp-ov-count">${r.count}</span>
            </div>`
            )
            .join('')}
          <div class="fp-ov-row">
            <span class="fp-ov-swatch" style="background:${data.colors.nbUnassigned}"></span>
            <span class="fp-ov-label">No neighborhood</span>
            <span class="fp-ov-count">${ov.unassigned}</span>
          </div>
        </div>
        <div class="fp-ov-footer"><span>Total</span><span>${ov.total}</span></div>
      `;
      return;
    }

    const ov = floor.overview.assignments;
    body.innerHTML = `
      <div class="fp-ov-rows">
        <div class="fp-ov-row"><span class="fp-ov-swatch" style="background:${data.colors.unassigned}"></span><span class="fp-ov-label">Not assigned to a user</span><span class="fp-ov-count">${ov.unassigned}</span></div>
        <div class="fp-ov-row"><span class="fp-ov-swatch" style="background:${data.colors.assigned}"></span><span class="fp-ov-label">Assigned to a user</span><span class="fp-ov-count">${ov.assigned}</span></div>
        <div class="fp-ov-row"><span class="fp-ov-swatch" style="background:${data.colors.hotel}"></span><span class="fp-ov-label">Hot/Hotel desk</span><span class="fp-ov-count">${ov.hotel}</span></div>
        <div class="fp-ov-row"><span class="fp-ov-swatch fp-ov-disabled"></span><span class="fp-ov-label">Disabled desk</span><span class="fp-ov-count">${ov.disabled}</span></div>
      </div>
      <div class="fp-ov-footer"><span>Total</span><span>${ov.total}</span></div>
    `;
  }

  function syncNotice() {
    const notice = document.getElementById('fp-notice');
    if (!notice) return;
    notice.hidden = !!STATE.noticeDismissed;
  }

  function render() {
    const title = document.getElementById('fp-title');
    if (title) title.textContent = STATE.buildingName || 'Boston HQ';
    const ovHeader = document.getElementById('fp-overview-header');
    if (ovHeader) ovHeader.textContent = STATE.view === 'layout' ? 'Floor overview' : 'Overview';
    renderFloorSelect();
    renderLeft();
    renderCanvas();
    renderOverview();
    syncNotice();
  }

  async function open({ floorId = 'floor-1', buildingName = 'Boston HQ', view = 'layout' } = {}) {
    await STATE.ready;
    if (!STATE.data) return;
    ensureOverlay();
    STATE.floorId = STATE.data.floors[floorId] ? floorId : STATE.data.floorOrder[0];
    STATE.buildingName = buildingName;
    STATE.view = view;
    STATE.noticeDismissed = false;
    const root = document.getElementById('fp-overlay');
    root.querySelectorAll('.fp-tab').forEach((t) => t.classList.toggle('is-active', t.dataset.view === STATE.view));
    root.hidden = false;
    document.body.style.overflow = 'hidden';
    render();
  }

  function close() {
    const root = document.getElementById('fp-overlay');
    if (!root) return;
    root.hidden = true;
    document.body.style.overflow = '';
  }

  function paintMini(el, floorId) {
    if (!STATE.data || !el) return;
    const floor = STATE.data.floors[floorId];
    if (!floor) return;
    const w = el.clientWidth || 220;
    const h = el.clientHeight || 165;
    const scale = Math.min(w / STATE.data.canvas.width, h / STATE.data.canvas.height) * 0.92;
    el.innerHTML = `<div class="fp-mini-layout" style="width:${STATE.data.canvas.width}px;height:${STATE.data.canvas.height}px;transform:scale(${scale});transform-origin:top left;">
      ${floor.desks
        .map((d) => {
          const bg = d.assigned ? STATE.data.colors.assigned : STATE.data.colors.unassigned;
          return `<div class="fp-mini-desk" style="left:${d.x}px;top:${d.y}px;width:${STATE.data.tileWidth}px;height:${STATE.data.tileHeight}px;background:${bg}"></div>`;
        })
        .join('')}
    </div>`;
  }

  async function paintMinis(root = document) {
    await STATE.ready;
    if (!STATE.data) return;
    root.querySelectorAll('[data-fp-mini]').forEach((el) => {
      paintMini(el, el.getAttribute('data-fp-mini'));
    });
  }

  window.FloorPlanningOverlay = { open, close, paintMinis, ready: STATE.ready };
})();
