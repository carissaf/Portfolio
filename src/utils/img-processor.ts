import type { ImageMetadata } from 'astro';

const processImage = (imgUrl: string)=>{

    const images = import.meta.glob<{default: ImageMetadata}>('/src/assets/**/*.{jpeg,jpg,png,gif}')
    if (!images[imgUrl]) throw new Error(`Image not found in path: ${imgUrl}`);
    return images[imgUrl]();
}

export default processImage;