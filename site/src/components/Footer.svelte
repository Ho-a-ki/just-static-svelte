<footer>
  <div class="items">
    <ul>
      <li>법인명 : (주)유스트코리아</li>
      <li>대표자명 : 박현정</li>
      <li>사업자번호 : 261-81-02131</li>
      <li>주소 : 서울특별시 강남구 도산대로61길 14 3층</li>
      <li>
      <span>대표번호 : 0507-1300-4056</span> |
      <span>팩스번호 : 02-3482-4055</span>
      </li>
      <li class="">MAIL : <a href="mailto:hq@justkorea.co.kr">hq@justkorea.co.kr</a></li>
    </ul>
  </div>
  <div class="line"></div>
  <div class="icons">
    <div id="logo">
      <img src="images/logo.svg" alt="" />
    </div>
    <div class="sns">
      <div>
        <img class="four" src="images/instagram-light.png" alt="">
      </div>
      <div>
        <img src="images/youtube-light.png" alt="">
      </div>
    </div>
  </div>
</footer>
  
<style lang="scss">
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  $second--height : 70px;
  
  a {
    color: $color--white;
  }

  img {
    height: 100%;
  }

  footer {
    font-size: 14px;
    font-family: Pretendard;
    background-color: $color--primary;
    color: $color--white;
    .items {
      padding: 30px 30px;
      ul {
        margin: 10px 0px;
        li {
          padding: 3px 0px;
        }
      }
    }
  }

  .icons {
    display: flex;
    height: $second--height;
    padding: 20px 30px;
    justify-content: space-between;
    .sns {
      display: flex;
      align-items: center;
      text-align: center;
      div {
        width: 75px;
        img {
          width: 100%;
          &.four {
            width: 33%;
          }
        }
      }
    }
  }


  .line {
    height: 1px;
    border-top: $color--white 3px solid; 
  }

</style>