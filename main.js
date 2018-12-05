! function () {
  var duration = 50

  function writeCode(perfix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run() {
      n += 1
      container.innerHTML = Prism.highlight(perfix + code.substring(0, n), Prism.languages.css);
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration);
  }



  let code = `
  /**
   * 生成画布
   */
  .preview {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #FEE433;
  }

  .wrapper {
    width: 100%;
    height: 165px;
    position: relative
  }
  
  .wrapper> :not(:last-child) {
    z-index: 1;
  }
  
  /**
   * 画皮卡丘鼻子
   */
  .nose {
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 12px;
    left: 50%;
    top: 28px;
    margin-left: -12px;
  }
  
  /**
   * 画皮卡丘眼睛
   */
  .eye {
    position: absolute;
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border-radius: 50%;
  
  }
  
  /**
   * 画皮卡丘眼珠
   */
  .eye::before {
    content: '';
    display: block;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: 2px;
    width: 24px;
    height: 24px;
    border: solid 2px #000;
  }
  
  /**
   * 左眼在左
   */
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  
  /**
   * 右眼在右
   */
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  
  
  /**
   * 画皮卡丘的脸
   */
  .face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    right: 50%;
  }
  
  /**
   * 右脸在右
   */
  .face.left {
    right: 50%;
    top: 85px;
    margin-right: 116px;
  
  }
  
  /**
   * 右脸在右
   */
  .face.right {
    left: 50%;
    top: 85px;
    margin-left: 116px;
  }


  /**
   *画上嘴唇
   */
  .upperLip {
    background: #FEE433;
    border: 3px solid #000;
    position: absolute;
    width: 80px;
    height: 25px;
    top: 49px;
  
  }
  
  .upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  
  .upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }
  
  /**
   * 画下嘴唇
   */
  .lowerLip-wrapper {
    height: 110px;
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    overflow: hidden;
    background: #FEE433;
  }
  
  .lowerLip {
    background: #990513;
    border: 2px solid black;
    width: 300px;
    height: 3500px;
    border-radius: 200px/2000px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }
  
  /**
   * 最后画舌头
   */
  .lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -50px;
    z-index: 1;
  }

  /**
   * 完成
   * END
   */
  `
  writeCode('', code)

  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    console.log(1)

    console.log($button)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')

    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break

    }
  })
}.call()