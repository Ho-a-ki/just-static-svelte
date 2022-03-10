

<script>
    const imgList = Array.from(Array(10).keys())
</script>

<div class="container">
    <div class="main">
        <small>우리에 대해</small>
        <h1>천연 웰빙 <br>«Made in Switzerland»</h1>
    </div>
    <section>
      <p>효과적이고, 진정되고, 개인적인 것: 90년 이상 동안 JUST는 Walzenhausen의 자연적인 웰빙을 가정에 가져왔습니다. 저스트의 모든 제품은 자연의 힘에 의존하고 아펜첼 허브의 전통 약초에 대한 풍부한 지식과 현대 과학을 결합합니다. 우리는 한 사람 한 사람에게 개인적으로 조언하고 허브와 식물의 효과와 일류 스위스 품질로 전 세계를 설득합니다.</p>
    </section>
    <section >
      <small>전통적인 스위스 회사</small>
      <h1>이야기의 시작은 1930년 ...</h1>
      <div>
        {#each imgList as i}
        <div class="img-box">
            10개의 이미지와 내용들
        </div>
        {/each}
      </div>
    </section>
  </div>
  

<style lang="scss">
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
  
    $color--white : #FFF;
    $color--primary : #2553a0;

    .img-box {
        position: relative;
        border: $color--primary solid 1px;
        width: 300px;
        height: 300px;
        &:nth-child(2n) {
            background-color: $color--primary;
            left: 25%;
        }
    }
  
    small {
      display: block;
      font-family: "Noto Serif KR", serif;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 6.5px;
    }
    h1 {
      font-size: 45px;
      letter-spacing: 1px;
      word-break: keep-all;
      margin-top: 20px;
      color: $color--primary;
    }
  
    p {
      line-height: 1.6;
      font-size: 1em;
    }
  
  
    button {
      border-radius: 0px;
      border: $color--primary solid 1px;
      background-color: transparent;
      color: $color--primary;
      padding: 16px 32px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        background-color: $color--primary;
        color: $color--white;
      }
    }
  
    div.main {
      background-image: url(../images/about-us-bg.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 0;
      height: 600px;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      small, h1 {
        color: $color--white;
        text-shadow: 4px 4px 15px #000000af;
      }
    }
  
    section {
      background-color: $color--white;
      padding: 60px 30px;
  
      &.primary {
        background-color: #f2f7ff;
      }
    }
  
    
  </style>