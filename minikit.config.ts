// app/minikit.config.ts
import type { MiniAppManifest } from '@base-org/minikit-sdk';

const manifest: MiniAppManifest = {
  id: 'echo',
  name: 'Echo',
  description: 'Add a short onchain echo to any cast — a verified reaction with your Farcaster identity.',
  icon: {
    url: 'https://echo-mini-app.vercel.app/icon.png',
    maskable: true,
  },
  miniapp: {
    start_url: '/',
    contexts: ['cast-embed', 'profile', 'direct'],
    supported_features: ['accountAssociation'],
  },
  accountAssociation: {
    fid: 0,
    custody: "0x0000000000000000000000000000000000000000",
    signature: "0x",
    deadline: 0
  },
};

export default manifest;
