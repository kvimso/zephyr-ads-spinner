
// Sample AI responses based on business plan keywords
const aiResponses = [
  {
    keywords: ['budget', 'cost', 'price', 'money', 'investment', 'funding'],
    response: "I see you're concerned about budget. Zephyr AI offers affordable plans starting at just 19 GEL per month, making professional marketing accessible to small businesses. Our AI optimizes your ad spend to ensure maximum ROI."
  },
  {
    keywords: ['georgian', 'language', 'local', 'market', 'georgia', 'tbilisi', 'batumi'],
    response: "As a marketing platform designed specifically for the Georgian market, we understand local business needs. Our partnership with Georgian AI 'Ertaoza' provides complete Georgian language support and understanding of local market dynamics."
  },
  {
    keywords: ['time', 'busy', 'quick', 'fast', 'efficient'],
    response: "I understand time is valuable for business owners. Zephyr automates your marketing efforts, creating and optimizing campaigns in minutes rather than hours. You can focus on running your business while we handle your marketing."
  },
  {
    keywords: ['competition', 'competitors', 'market', 'advantage'],
    response: "What sets Zephyr apart is our focus on the Georgian market and local language support. Unlike international platforms, we've built our AI to understand Georgian consumer behavior and local business needs."
  },
  {
    keywords: ['how', 'work', 'use', 'platform', 'function'],
    response: "Zephyr works by connecting to your business website or social media, analyzing your business profile, and automatically creating optimized ad campaigns for Facebook, Instagram, and Google Ads. Our AI continuously monitors performance and reallocates your budget to the best-performing ads."
  }
];

// Function to find the most relevant response
export const getAIResponse = (userMessage: string) => {
  const lowercaseMessage = userMessage.toLowerCase();
  
  // Find the response with the most keyword matches
  let bestResponse = {
    response: "Thank you for sharing that information. Zephyr AI can help optimize your marketing efforts with our automated platform. Would you like to know more about specific features or pricing options?",
    matchCount: 0
  };
  
  aiResponses.forEach(response => {
    const matchCount = response.keywords.filter(keyword => 
      lowercaseMessage.includes(keyword.toLowerCase())
    ).length;
    
    if (matchCount > bestResponse.matchCount) {
      bestResponse = {
        response: response.response,
        matchCount
      };
    }
  });
  
  return bestResponse.response;
};
