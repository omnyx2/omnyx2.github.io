// A fixed, full-viewport background that tiles the site's rotating "blob" motif.
// Because it is fixed and fully covers the viewport, scrolling never breaks it,
// and the rotating shapes repeat across the whole screen instead of only the corners.

const TILE_COLORS = [
  { out: '#9bbbbb', in: '#c7d6d6' },
  { out: '#ccbd93', in: '#e6dcc2' },
  { out: '#b6c8ae', in: '#d6e2d0' },
  { out: '#a7b5cf', in: '#ccd6e6' },
  { out: '#d0a9a0', in: '#e6cdc6' },
]

function Tile({ i }) {
  const c = TILE_COLORS[i % TILE_COLORS.length]
  const a = 18 + (i % 5) * 5   // rotation duration, varied per tile
  return (
    // viewBox centered on the blob's rotation origin (13,25) so it sweeps around the tile center
    <svg
      viewBox="-27 -15 80 80"
      preserveAspectRatio="xMidYMid slice"
      className="!static !h-full !w-full"
      aria-hidden="true"
    >
      <path fill={c.out} style={{ transformOrigin: '13px 25px', animation: `bgspin ${a}s linear infinite` }}
        d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
      <path fill={c.in} style={{ transformOrigin: '13px 25px', animation: `bgspin ${(a * 0.6).toFixed(1)}s linear infinite reverse` }}
        d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
    </svg>
  )
}

export default function RotatingBackground({ tiles = 60 }) {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-notebookBackground">
      <div className="bg-tile-grid h-full w-full opacity-40">
        {Array.from({ length: tiles }).map((_, i) => (
          <div key={i} className="overflow-hidden">
            <Tile i={i} />
          </div>
        ))}
      </div>
    </div>
  )
}
