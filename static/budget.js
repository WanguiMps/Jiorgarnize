// Define an array of budgeting tips with explanations
var budgetingTips = [
    {
        tip: "Track your expenses regularly",
        explanation: "As a student, tracking  expenses regularly is essential for effectively managing my finances and maintaining a balanced budget. By diligently recording every expenditure, whether it's for textbooks, groceries, dining out, or entertainment, You gain insight into spending habits and can identify areas where you may be overspending. This practice helps you to set realistic financial goals, such as saving for future expenses or managing student loans. Moreover, tracking expenses enables you as a student to make informed decisions about my spending, prioritize necessities over luxuries, and avoid unnecessary debt."
    },
    {
        tip: "Create a monthly budget plan",
        explanation: "Allocate your income As a student, creating a monthly budget plan is essential for managing your finances effectively while juggling the demands of campus life. By taking stock of your income from sources like part-time jobs or parental support and estimating your expenses such as tuition fees, rent, textbooks, groceries, transportation, and social activities, you gain a clear picture of your financial situation. This empowers you to make informed decisions about where to allocate your funds, prioritize essential expenses, and identify areas where you can cut back or save. Developing this habit early on not only helps you avoid financial stress but also fosters responsible spending habits that will serve you well both during your college years and beyond graduation.to different categories such as bills, groceries, savings, and entertainment. Stick to your budget to ensure you're not overspending."
    },
    {
        tip: "Set financial goals",
        explanation: "Define short-term and long-term financial goals, such as saving for a vacation or retirement. Having clear goals will motivate you to manage your finances better.As a campus student, setting financial goals is paramount for navigating the complexities of student life while laying the groundwork for a secure financial future. These goals might include saving for tuition fees, covering accommodation and utilities, budgeting for textbooks and school supplies, and setting aside funds for leisure activities or emergencies. By defining these objectives, students can create a tailored budget plan that aligns with their aspirations and obligations. Whether aiming to graduate debt-free, build an emergency fund, or embark on post-graduation adventures, establishing clear financial goals provides direction, motivates disciplined spending, and cultivates valuable money management skills essential for success both during college and beyond."
    },
    {
        tip: "Limit unnecessary spending",
        explanation: "Avoid impulse purchases and unnecessary expenses. Before making a purchase, ask yourself if it aligns with your financial goals and if you really need it.Limiting unnecessary spending is vital for campus students to stretch their budgets and maintain financial stability. Examples of unnecessary spending that students should avoid include dining out frequently instead of cooking at home, impulse purchases on non-essential items like clothing or gadgets, overspending on entertainment such as movies or concerts, subscribing to multiple streaming services when one would suffice, and paying for premium memberships or subscriptions they rarely utilize. By identifying these areas and practicing mindful spending habits,as a  student you can allocate their funds more wisely, ensuring they have enough for essentials like shopping, food, groceries, and transportation while still having some room for occasional treats or savings."
    },
    {
        tip: "Automate your savings",
        explanation: "Set up automatic transfers from your checking account to your savings account. This ensures that you're consistently saving money without having to think about it.As a campus student, automating your savings can be a game-changer in managing your finances effectively amidst the hustle and bustle of student life. By setting up automatic transfers from your checking account to a designated savings account, you ensure that a portion of your income is consistently set aside for future needs. Whether it's saving for textbooks, covering unexpected expenses, or planning for post-graduation adventures, automating your savings streamlines the process and removes the temptation to spend impulsively. This approach not only helps you build a financial safety net but also instills a habit of saving early on, setting you on the path towards financial stability and success throughout your college journey and beyond."
    },
    {
        tip: "Use cashback and rewards programs",
        explanation: "As a campus student, taking advantage of cashback and rewards programs can significantly boost your purchasing power, especially when shopping at popular supermarkets like Carrefour, Quickmart, and Naivas. For instance, Carrefour's loyalty program offers points for every purchase, which can be redeemed for discounts or free products on future shopping trips. Quickmart Supermarket often runs promotions where customers can earn cashback or receive vouchers for specific products purchased. Similarly, Naivas provides loyalty cards that accumulate points with each transaction, leading to discounts or special deals on groceries and household items. By keeping an eye out for these offers and strategically planning your purchases, you can maximize your savings and get more value for your money. Whether it's stocking up on essentials or treating yourself to a few indulgences, leveraging these reward programs allows you to stretch your budget further while still enjoying the convenience and variety these supermarkets offer."
    },
    {
        tip: "Review your subscriptions regularly",
        explanation: "Regularly reviewing your subscriptions is a smart habit for campus students to ensure they're getting the most value from their expenses. Whether it's streaming services, gym memberships, software subscriptions, or magazine subscriptions, these costs can add up quickly. By taking the time to assess which subscriptions are essential and which ones can be trimmed or canceled, students can free up funds for other priorities. For example, if you find that you're not using a streaming service as much as you thought, consider canceling it or switching to a lower-tier plan. Similarly, if you're not utilizing a gym membership regularly, it might be worth exploring more cost-effective exercise options. By regularly reviewing your subscriptions, you can optimize your spending, avoid unnecessary expenses, and ensure that your money is working for you in the best possible way."
    },
    {
        tip: "Avoid impulse purchases",
        explanation: "As a student, resisting impulse purchases is key to managing your  limited budget effectively. With tempting offers and advertisements constantly vying for your attention, it's easy to succumb to the allure of spontaneous buying. However, you should learn  to adopt strategies to curb this tendency. Before making any purchase,  pause to ask yourself if it's a genuine necessity or just a fleeting desire. Also start implementing a 24-hour rule, where you wait a day before finalizing any non-essential purchases to ensure they're truly worth it. By being mindful of your spending habits and prioritizing my needs over wants, you can stretch my budget further, avoid unnecessary debt, and stay focused on my academic and financial goals."
    },
    {
        tip: "Cook meals at home instead of eating out",
        explanation: "As a student, choosing to cook meals at home instead of dining out is a wise financial decision. By opting for homemade meals, you save money that would otherwise be spent on expensive restaurant bills or takeout orders. Planning meals in advance, shopping for ingredients efficiently, and preparing meals in bulk can further optimize your spending and ensure that you have nutritious, budget-friendly options readily available throughout the week. Additionally, cooking at home allows you to develop essential culinary skills and experiment with different recipes, fostering a sense of creativity and self-sufficiency. Overall, prioritizing home-cooked meals contributes to financial stability, healthier eating habits, and a more rewarding student experience.Save money by cooking meals at home instead of dining out. Not only is it cheaper, but it also allows you to control the ingredients and portions of your meals."
    },
    {
        tip: "Invest in your financial education",
        explanation: "Investing in your financial education is paramount for success as a student. While academic pursuits are undoubtedly important, understanding how to manage money effectively is equally essential for long-term financial stability. By taking the time to learn about topics such as budgeting, saving, investing, and managing debt, students can make informed decisions that will benefit them throughout their lives. Whether through books, online resources, workshops, or courses offered by the university, actively seeking out opportunities to improve financial literacy equips students with the knowledge and skills they need to navigate the complexities of personal finance confidently. Moreover, by starting early and incorporating financial education into their academic journey, students lay the groundwork for building wealth, achieving financial independence, and realizing their long-term goals."
    }
  ];
  
  // Function to get a random tip with explanation
  function getRandomTip() {
    var randomIndex = Math.floor(Math.random() * budgetingTips.length);
    var randomTip = budgetingTips[randomIndex];
    return randomTip;
  }
  
  // Event listener for the button
  document.getElementById("getTipsBtn").addEventListener("click", function() {
    var tipsContent = document.getElementById("tipsContent");
    if (tipsContent.style.display === "none") {
        tipsContent.style.display = "block";
        // Get a random tip with explanation and display it
        var randomTip = getRandomTip();
        tipsContent.innerHTML = "<p>Here's a budgeting tip for you:</p><p><strong>" + randomTip.tip + "</strong><br>" + randomTip.explanation + "</p>";
    } else {
        tipsContent.style.display = "none";
    }
  });
  
  // Display a random tip with explanation when the page loads
  window.addEventListener("load", function() {
    var tipsContent = document.getElementById("tipsContent");
    var randomTip = getRandomTip();
    tipsContent.innerHTML = "<p>Here's a random budgeting tip for you:</p><p><strong>" + randomTip.tip + "</strong><br>" + randomTip.explanation + "</p>";
  });
  
  // Dark mode toggle
  document.getElementById("darkModeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".switch").forEach(function(element) {
        element.classList.toggle("dark-mode");
    });
  });
  