import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    /* 静的エクスポート */
    // output: 'export',
    /* 全てのscssファイルの先頭に自動挿入 */
    prependData: `@use "@/styles/variables" as *; @use "@/styles/mixins" as *;`,
  },
};

export default nextConfig;
