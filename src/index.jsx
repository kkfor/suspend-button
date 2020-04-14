import React, { Component } from "react"
import "./index.scss"

class suspendButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oLeft: "",
      oTop: ""
    }
    this.$vm = null // 悬浮按钮
    this.moving = false // 移动状态

    this.oW = null // 悬钮距离
    this.oH = null

    this.htmlWidth = null // 页面宽度
    this.htmlHeight = null

    this.bWidth = null // 悬钮宽度
    this.bHeight = null

    this.click = false // 是否是点击
  }

  // 移动触发
  onTouchStart(e) {
    e = e.touches[0]
    this.click = true

    this.oW = e.clientX - this.$vm.getBoundingClientRect().left
    this.oH = e.clientY - this.$vm.getBoundingClientRect().top

    this.htmlWidth = document.documentElement.clientWidth
    this.htmlHeight = document.documentElement.clientHeight

    this.bWidth = this.$vm.offsetWidth
    this.bHeight = this.$vm.offsetHeight

    let oLeft = e.clientX - this.oW
    let oTop = e.clientY - this.oH
    this.setState({
      oLeft,
      oTop
    })

    this.moving = true
  }

  // 移动结束
  onTouchEnd(e) {
    this.moving = false

    this.$vm.className = this.$vm.className + " t-suspend-button-animate"

    // 左侧距离
    let oLeft = this.state.oLeft
    if (oLeft < (this.htmlWidth - this.bWidth) / 2) {
      oLeft = 0
    } else {
      oLeft = this.htmlWidth - this.bWidth
    }

    if (this.click) {
      this.props.onClick()
    }
    // }
    // if(oTop < 0) {
    //   oTop = 0
    // } else if (oTop > this.htmlHeight - this.bHeight) {
    //   oTop = this.htmlHeight - this.bHeight
    // }

    this.setState({
      oLeft
      // oTop
    })
  }

  componentDidMount() {
    this.$vm.addEventListener(
      "touchmove",
      e => {
        if (e.cancelable) {
          e.preventDefault()
        }
      },
      {
        passive: false
      }
    )
  }

  // 开始移动
  onTouchMove(e) {
    this.$vm.className = "t-suspend-button"
    this.moving && this.onMove(e)
  }

  // 移动中
  onMove(e) {
    e = e.touches[0]
    this.click = false

    // 左侧距离
    let oLeft = e.clientX - this.oW
    let oTop = e.clientY - this.oH
    if (oLeft < 0) {
      oLeft = 0
    } else if (oLeft > this.htmlWidth - this.bWidth) {
      oLeft = this.htmlWidth - this.bWidth
    }
    if (oTop < 0) {
      oTop = 0
    } else if (oTop > this.htmlHeight - this.bHeight) {
      oTop = this.htmlHeight - this.bHeight
    }

    this.setState({
      oLeft,
      oTop
    })
  }

  render() {
      const { img, style, imgStyle } = this.props
    return (
      <span
        className="t-suspend-button"
        ref={$vm => (this.$vm = $vm)}
        onTouchStart={e => this.onTouchStart(e)}
        onTouchMove={e => this.onTouchMove(e)}
        onTouchEnd={e => this.onTouchEnd(e)}
        style={{
          left: `${this.state.oLeft}px`,
          top: `${this.state.oTop}px`,
          ...style
        }}
      >
        {img && <img src={img} style={imgStyle} alt="" />}
      </span>
    )
  }
}

export default suspendButton
