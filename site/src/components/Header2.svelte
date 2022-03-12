<header>
    <div class="wrapper">
        <div class="left-items">
            <ul>
                <li><a href="">브랜드</a></li>
                <span>|</span>
                <li><a href="">스토어</a></li>
                <span>|</span>
                <li><a href="">허브 백과사전</a></li>
            </ul>
        </div>
        <div class="center-items">
            <div id="logo">
                <img src="images/top-logo.svg" alt="">
            </div>
        </div>
        <div class="right-items">
            <ul>
                <li><a href="">제품 철학</a></li>
                <span>|</span>
                <li><a href="">제품 찾기</a></li>
                <span>|</span>
                <li><a href="">연락</a></li>
            </ul>
        </div>
    </div>
</header>

<style lang="scss">
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  img {
  width: 100%;
  }

  a {
  color: black;
  text-decoration: none;
  }

  header {
  max-width: 1440px;
  margin: 0 auto;
  font-family: "Pretendard";
  background-color: rgb(255, 255, 255);
  }

  div.wrapper {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  div > div#logo {
      box-sizing: border-box;
      padding: 30px;
      width: 200px;
  }
  div {
      text-align: center;
      ul {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
          color: rgba(black, 0.2);
      }
      li {
          flex: auto;
          position: relative;
          padding: 30px 0;
          margin: 0 30px;

          &:hover::after {
          content: '';
          left: 10%;
          top: 100%;
          position: absolute;
          width: 75%;
          height: 3px;
          background-color: #2553a0;
          }
      }
      }
  }
  }
</style>