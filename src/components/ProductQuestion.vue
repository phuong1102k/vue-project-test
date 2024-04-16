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
          <a class="tab-button" @click="openTab('question1')">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text" :class="{ open: activeTab == 'question1' }">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" @click="openTab('question2')">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text" :class="{ open: activeTab == 'question2' }">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" @click="openTab('question3')">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text" :class="{ open: activeTab == 'question3' }">
            Note that this text is a demonstration example of a response you
            would add to answer a relevant question. <br />
            <strong>Tip: </strong>Increase trust by being clear, informative,
            and, transparent with your customers. <br />
            Have further questions? <a href="#">Contact us.</a>
          </div>
        </div>

        <div class="tab">
          <a class="tab-button" @click="openTab('question4')">
            <span>What payment methods do you accept?</span>
            <span class="more"><i class="fa-solid fa-angle-down"></i></span>
          </a>

          <div class="text" :class="{ open: activeTab == 'question4' }">
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
import { ref } from "vue";
export default {
  name: "ProductQuestion",
  components: {},

  setup() {
    const activeTab = ref("question1");

    const openTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      openTab,
    };
  },
};
</script>
