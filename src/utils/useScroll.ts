export const autoScroll = (
    targetRef: React.RefObject<HTMLElement>,
    duration: number = 500
) => {
    const target = targetRef.current;

    if (!target) {
        return;
    }

    const targetPosition = target.offsetTop;
    const currentPosition = window.pageYOffset;
    const distance = targetPosition - currentPosition;
    let start: number;

    const animation = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

        if (progress < duration) {
            requestAnimationFrame(animation);
        }
    };

    requestAnimationFrame(animation);
};

export const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
