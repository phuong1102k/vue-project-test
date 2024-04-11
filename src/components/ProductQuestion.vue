<template>
  <!-- product question -->
  <div class="questions">
    <div class="wrapper">
      <div class="heading">
        <p>We have answers!</p>
        <h2>Questions?</h2>
        <span
          >Can’t find the answer you’re looking for? Visit our
          <a href="#">FAQs</a> or
          <a href="#">chat with our friendly team</a></span
        >
      </div>

      <div class="tabs">
        <div class="tab">
          <a class="tab-button" onclick="toggleTab(3)">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" onclick="toggleTab(4)">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" onclick="toggleTab(5)">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" onclick="toggleTab(6)">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductQuestion",
  components: {},
};
</script>
