const dynamicImageLoader = ({ src, width }: any) => {
    return `${src}?w=${width}`;
};
export default dynamicImageLoader;