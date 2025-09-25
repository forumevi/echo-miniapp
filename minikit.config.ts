import type { MiniAppManifest } from '@base-org/minikit-sdk';

const manifest: MiniAppManifest = {
  id: 'echo',
  name: 'Echo',
  description: 'Add a short onchain echo to any cast — a verified reaction with your Farcaster identity.',
  icon: {
    url: 'https://your-vercel-url.vercel.app/icon.png',
    maskable: true,
  },
  miniapp: {
    start_url: '/',
    contexts: ['cast-embed', 'profile', 'direct'],
    supported_features: ['accountAssociation'],
  },
  accountAssociation: {
    // Boş — Base Build sonrası doldurulacak
  },
};

export default manifest;
