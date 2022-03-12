
<script>

</script>

<div class="container">
  <div class="main">
      <small>JUST - Original From 1930</small>
      <h1>아펜젤 허브의 강력한 약효 성능</h1>
  </div>
  <section>
    <p>우리는 90년 동안 독창적이고 전 세계 34개 시장에서 대표되는 JUST입니다. 한 때 붓으로 시작한 것이 이제 3세대에 걸쳐 국제적으로 성공적인 가족 사업이 되었습니다. JUST 제품은 건강, 미용 및 웰빙을 위한 매우 효과적인 식물의 힘으로 확신합니다. 그들은 피부와 머리카락을 돌보고 몸과 마음에 매우 유익한 영향을 미칩니다. 스위스 최고 품질의 효과적인 JUST 허브 및 식물 관리에 대한 매력은 전 세계적으로 집에 있습니다. 120,000명의 전담 고문이 한 사람 한 사람의 개인적인 조언으로 귀하의 개인 간병 필요를 돌봅니다. JUST의 자연스러운 웰빙을 가까이에서 경험하세요.</p>
  </section>
  <section class="primary">
    <small>JUST WORLD</small>
    <h1>모든 감각을 위한 경험</h1>
    <p>허브와 식물의 세계는 항상 인류를 매료시켜 왔습니다. JUST 세계에서는 고도로 집중된 자연의 힘과 최신 과학적 발견을 경험할 수 있습니다. Appenzell 가족의 전통, 고산 허브 성분의 힘, 식물에서 피부에 이르기까지 효과적인 화장품 제작에 대한 독특한 통찰력을 발견하십시오. 이제 콘스탄스 호수 위의 목가적인 발젠하우젠의 새로운 JUST 세계에서.</p>
    <button>JUST WORLD</button>
  </section>
  <section>
    <small>JUST WORLD</small>
    <h1>JUST WORLD 티켓을 온라인으로 구매하세요</h1>
    <button>티켓 사러가기</button>
  </section>
  <section>
    <small>강력한 허브</small>
    <h1>스위스 허브 전통과 과학의 만남</h1>
    <p>독특한 식물 추출물과 효과적인 에센스는 자연이 주는 훌륭한 선물입니다. 풍부한 경험과 지식을 바탕으로 저스트는 스위스 고유의 허브와 전 세계 최고로부터 높은 효능을 끌어냅니다.</p>
    <div class="herb-list">
  </section>
</div>

<style lang="scss">

.container {
    padding-top: 120px;
    background-color: $color--white;
    font-family: 'Pretendard';
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

  // button {
  //   background-color: $color--primary;
  //   color: $color--white;
  //   padding: 16px 32px;
  //   cursor: pointer;
  //   transition: 0.4s;
  //   &:hover {
  //       background-color: lighten($color--primary, 20%);
  //   }
  // }

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
    background-image: url(../images/intro-bg.jpg);
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

  
@media screen and (min-width: 700px) {

}

  
</style>