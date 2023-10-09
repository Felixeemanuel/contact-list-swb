
export const mainVariants = {
    hidden: {
        // opacity: 0,
        y: '100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .4,
            type: 'easeIn'
        }
    },
    exit: {
        y: '100vh',
        transition: {
            duration: .4,
            type: 'easeIn'
        }
    }
}