class Drag {
  private body?: HTMLBodyElement
  private pageX
  private pageY
  //   constructor() {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }

  private mouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseDragCallback = this.mouseDrag.bind(this)
    this.body?.addEventListener('mousemove', mouseDragCallback)
    this.body?.addEventListener('mouseup', () =>
      this.body?.removeEventListener('mousemove', mouseDragCallback)
    )
    this.body?.addEventListener('mouseout', () =>
      this.body?.removeEventListener('mousemove', mouseDragCallback)
    )
  }

  private mouseDrag(e: MouseEvent) {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
