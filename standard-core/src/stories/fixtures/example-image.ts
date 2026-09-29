const exampleImageUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <defs>
      <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f4eee5" />
        <stop offset="1" stop-color="#d8c7ae" />
      </linearGradient>
      <linearGradient id="wood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#805737" />
        <stop offset="0.5" stop-color="#b98556" />
        <stop offset="1" stop-color="#6f482e" />
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#wall)" />
    <rect y="390" width="800" height="110" fill="#b5a18a" />
    <circle cx="650" cy="105" r="52" fill="#f7d998" opacity="0.85" />
    <rect x="105" y="250" width="590" height="38" rx="8" fill="url(#wood)" />
    <rect x="145" y="286" width="28" height="155" rx="7" fill="#68442c" />
    <rect x="627" y="286" width="28" height="155" rx="7" fill="#68442c" />
    <rect x="278" y="187" width="244" height="62" rx="9" fill="#c89a6c" />
    <path d="M300 187v-72h200v72" fill="none" stroke="#69462e" stroke-width="18" stroke-linejoin="round" />
    <rect x="341" y="209" width="118" height="17" rx="8" fill="#eee3d2" opacity="0.8" />
  </svg>
`)}`;

const exampleCmsImage = {
  url: exampleImageUrl,
  alternativeText: "Wooden furniture in a warm, bright interior",
  width: 800,
  height: 500,
};

export { exampleCmsImage, exampleImageUrl };
