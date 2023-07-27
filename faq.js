

const lang = localStorage.getItem('lang');
console.log(lang);

const faqContent = [
  {
    id: 'faq_1_q',
    qId: "qId_1",
    aId: "aId_1",
    question: "What is Peak?",
    answer: "Peak is an ERC-20 token that allows investors to access exclusive investment opportunities. By staking your tokens, you become part of a community where you can participate, earn and collaborate with like-minded individuals. ",
  },
  {
    id: 'faq_2_q',
    qId: "qId_2",
    aId: "aId_2",
    question: "How do I participate in Peak?",
    answer: "You can join Peak by purchasing PEAK tokens during our Pre-sale or through an exchange post-launch.  <br> We plan to initiate the Pre-sale Round around mid-August 2023. Join our Discord and Twitter to stay updated on all our forthcoming activities, including the Pre-sale Round announcement. For the Pre-sale Round, on top of receiving the PEAK token you invested in – you will also be automatically be enrolled in both of the platform projects at no cost."
  },
  {
    id: "faq_3_q",
    qId: "qId_3",
    aId: "aId_3",
    question: "What can I do with PEAK tokens?",
    answer: "PEAK tokens not only provide access to exclusive investment opportunities, but also allow you to vote on future investments and own a share of Return on Investments (ROI) proportional to your stake. On public launch, Peak will curate and feature two projects monthly. We will make available a detailed factsheet about each investment project. To participate in the investment, simply stake your tokens on the Peak Platform app.",
  },
  {
    id: "faq_4_q",
    qId: "qId_4",
    aId: "aId_4",
    question: "How can I sell my investments?",
    answer: "Earnings from your investments can be withdrawn upon the completion of the staked period, or if a process of token buyback is initiated by Peak. The exact method of selling your investments depends on the type of investment made. Detailed instructions will be provided to all investors accordingly. ",
  },
  {
    id: "faq_5_q",
    qId: "qId_5",
    aId: "aId_5",
    question: "How is Peak different from traditional investing?",
    answer: "Peak allow distributed access to deals that were traditionally open to only VCs and institutional funds. Peak adopts a radically innovative approach that democratises access to these exclusive deals. By circumventing the traditional gatekeepers of investing, Peak offers distributed access to opportunities, levelling the playing field for everyone. Regardless of investors' personal wealth or their social and economic statuses, anyone who is a holder of PEAK tokens can stand shoulder to shoulder with established VCs and funds.",
  },
  {
    id: "faq_6_q",
    qId: "qId_6",
    aId: "aId_6",
    question: "When is Private Round?",
    answer: "The Private Round has concluded with USD100,000 raised from our 106 private investors! We look forward to build the next frontier of web3 investing with you. We will be releasing details for our Pre-sale Round shortly.",
  },
  {
    id: "faq_7_q",
    qId: "qId_7",
    aId: "aId_7",
    question: "When is Pre-sale Round?",
    answer: "We plan to initiate the Pre-sale Round around mid-August 2023. Join our Discord and Twitter to stay updated on all our forthcoming activities, including the Pre-sale Round announcement. Only for the Pre-sale Round, on top of receiving the token allocation you invested in – you will also be automatically be enrolled in two of our very first curated projects.",
  },
  {
    id: "faq_8_q",
    qId: "qId_8",
    aId: "aId_8",
    question: "What are the details for the Pre-sale Round?",
    answer: "We plan to initiate the Pre-sale Round around mid-August 2023. Join our Discord and Twitter to stay updated on all our forthcoming activities, including the Pre-sale Round announcement. Only for the Pre-sale Round, on top of receiving the token allocation you invested in – you will also be automatically be enrolled in two of our very first curated projects.",
  },
  {
    id: "faq_9_q",
    qId: "qId_9",
    aId: "aId_9",
    question: "How does the investment guarantee for the Pre-sale Round works?",
    answer: "Our goal is to assure our investors that we stand behind our product and are dedicated to creating a reliable and trustworthy investment opportunity. If for any reason, you do not receive any return on your initial investment within a 2-year period, we will return your investment in full. Original invested amount will be distributed to the original wallet that participated in Private and Pre-sale Round (aggregated in USD). This commitment is only available for investors in the Private and Pre-sale Round.",
  },
  {
    id: "faq_10_q",
    qId: "qId_10",
    aId: "aId_10",
    question: "How does the staking system work at Peak?",
    answer: "The stake system in Peak works by allowing members to stake PEAK tokens in financial opportunities presented on the platform. Staking your tokens lets you gain a portion of the returns from the investment generated proportional to your stake. The staked tokens represent your claim in the project or deal. When the deal profits, investors get their original stake back along with a pro-rata share of profits.",
  },
  {
    id: "faq_11_q",
    qId: "qId_11",
    aId: "aId_11",
    question: "What projects am I allowed to invest in?",
    answer: "You can invest in any project that is available on the Peak platform. Every month, Peak will feature two new investment project opportunities, each complete with a comprehensive factsheet, which you can review prior to investing.",
  },
  {
    id: "faq_12_q",
    qId: "qId_12",
    aId: "aId_12",
    question: "Is there any risk involved in investing in Peak?",
    answer: "Like with any investment, there is always risk involved. However, at Peak, we try to mitigate these risks by thoroughly vetting and researching potential investments before presenting them to our community.However, keep in mind that investing always involves risks. Please consider these risks before making an investment decision.",
  },
  {
    id: "faq_13_q",
    qId: "qId_13",
    aId: "aId_13",
    question: "What are the returns on investment? ",
    answer: "Although exact returns will vary depending on the specific investment opportunities presented and the success of those projects, Peak's model is designed to maximise returns by giving investors access to high-potential, thoroughly vetted investment opportunities. However, keep in mind that investing always involves risks. Please consider these risks before making an investment decision.",
  },
  {
    id: "faq_14_q",
    qId: "qId_14",
    aId: "aId_14",
    question: "How can I sell my investments?",
    answer: "Earnings from your investments can be withdrawn upon the completion of the staked period, or if a process of token buyback is initiated by Peak. The exact method of selling your investments depends on the type of investment made. Detailed instructions will be provided to all investors accordingly.",
  },
]

const faqBody = document.getElementById('faqBody');


faqContent.forEach((faq) => {
  // show in faqBody
  faqBody.innerHTML += `
  <div class="accordion-item"
  id=${faq.id}
  >
  <button
    class="accordion-header flex items-center justify-between w-full py-2 px-0 font-medium text-left text-gray-500 dark:text-gray-400"
  >
    <span
      id=${faq.qId}
      class="text-brandColor font-[800] text-[20px] md:text-[24px]"
      >${faq.question}</span
    >
    <i class="fa-solid fa-chevron-down text-white"></i>
    <i class="fa-solid fa-chevron-up hidden"></i>
  </button>
  <div class="accordion-content hidden py-2 px-5">
    <p
      id=${faq.aId}
      class="mb-2 text-[16px] md:text-[18px] text-gray-500 dark:text-gray-400"
    >
      ${faq.answer}
    </p>
  </div>
</div>`
})