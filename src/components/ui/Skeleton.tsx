import "./skeleton.scss";

interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
}

const Skeleton = ({width="100%", height="100%", borderRadius="8px"}: SkeletonProps) => {
    return (
        <div 
            className="skeleton"
            style={{width, height, borderRadius}}
        ></div>
    )
}

export default Skeleton;