export default class TouchEvent {
    static SWIPE_THRESHOLD = 50
    static SWIPE_LEFT = 1
    static SWIPE_RIGHT = 2
    static SWIPE_UP = 3
    static SWIPE_DOWN = 4

    constructor(startEvent, endEvent) {
        this.startEvent = startEvent
        this.endEvent = endEvent || null
    }

    getSwipeDirection () {
        const start = this.startEvent.changedTouches[0]
        const end = this.endEvent.changedTouches[0]
        const horizontalDifference = start.screenX - end.screenX
        const verticalDifference = start.screenY - end.screenY
        let swipeDirection = null

        if (!start || !end) return null

        if (Math.abs(horizontalDifference) > Math.abs(verticalDifference)) {
            if (horizontalDifference >= TouchEvent.SWIPE_THRESHOLD)
                swipeDirection = TouchEvent.SWIPE_LEFT
            else if (horizontalDifference <= -TouchEvent.SWIPE_THRESHOLD)
                swipeDirection = TouchEvent.SWIPE_RIGHT
        } else {
            if (verticalDifference >= TouchEvent.SWIPE_THRESHOLD)
                swipeDirection = TouchEvent.SWIPE_UP
            else if (verticalDifference <= -TouchEvent.SWIPE_THRESHOLD)
                swipeDirection = TouchEvent.SWIPE_DOWN
        }

        return swipeDirection
    }

    isSwipeLeft () {
        return this.getSwipeDirection() === TouchEvent.SWIPE_LEFT
    }

    isSwipeRight () {
        return this.getSwipeDirection() === TouchEvent.SWIPE_RIGHT
    }

    isSwipeUp () {
        return this.getSwipeDirection() === TouchEvent.SWIPE_UP
    }

    isSwipeDown () {
        return this.getSwipeDirection() === TouchEvent.SWIPE_DOWN
    }

    setEndEvent (endEvent) {
        this.endEvent = endEvent
    }
}