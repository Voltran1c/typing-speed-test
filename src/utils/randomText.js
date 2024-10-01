const textSnippets = [
  "Typing is an essential skill for modern technology. It helps users interact with computers faster. Improving typing speed boosts productivity. Efficient typing saves time in daily tasks. Mastering the keyboard is crucial for professional growth and daily life.",

  "Learning to code requires consistent practice. Programming languages like JavaScript and Python are popular choices. Coders solve problems by writing efficient algorithms that drive technology. Debugging is a key part of the development process. Building projects is the best way to enhance coding skills.",

  "Reading books stimulates the mind and imagination. Novels take readers on journeys through fictional worlds, transporting them to new adventures. Knowledge from non-fiction books enhances understanding and promotes learning. A good book can provide endless hours of enjoyment and relaxation. It broadens perspectives and deepens empathy.",

  "Exercise is important for maintaining a healthy body and mind. Regular physical activity promotes cardiovascular health and prevents various diseases. Strength training builds muscle and improves endurance for daily activities. Staying active reduces stress and enhances overall well-being. Physical fitness positively impacts mental clarity.",

  "Music brings joy and relaxation to people, offering a powerful emotional outlet. Different genres cater to different moods and tastes, whether it's classical, rock, or jazz. Classical music can soothe while rock energizes the soul, motivating creativity. Playing an instrument sharpens cognitive skills and enhances concentration. Music connects people across cultures and generations.",

  "Exploring new cultures expands your worldview and fosters open-mindedness. Traveling opens up opportunities for personal growth and self-discovery. Meeting people from different backgrounds is enriching and broadens social perspectives. Food, traditions, and languages provide new experiences that inspire curiosity. Learning about other cultures enhances mutual respect and understanding.",

  "Environmental conservation is crucial for the planet’s future. Reducing waste and recycling can minimize harm to ecosystems and wildlife. Renewable energy sources are the future of sustainability, providing alternatives to fossil fuels. Protecting wildlife ensures biodiversity for future generations, which is essential for a balanced ecosystem. Conservation efforts help preserve the beauty of nature.",

  "Time management is a valuable skill for success in any career or personal life. Planning your day helps avoid unnecessary stress and allows for better focus. Prioritizing tasks ensures deadlines are met efficiently, leading to better productivity. Taking breaks improves focus and reduces burnout, contributing to long-term success. Effective time management leads to a balanced and fulfilling life.",

  "Technology evolves rapidly, changing our daily lives and reshaping industries. Artificial intelligence is revolutionizing industries such as healthcare, finance, and marketing. Virtual reality creates immersive experiences for users, transforming entertainment and education. Staying updated on tech trends is important in the digital age for staying competitive. New inventions bring endless possibilities for innovation.",

  "The ocean is a vast and mysterious part of Earth that remains largely unexplored. Marine life flourishes in diverse ecosystems underwater, from coral reefs to the deep sea. Coral reefs house thousands of species of sea creatures, contributing to biodiversity. Ocean exploration unlocks secrets of the deep blue, revealing new species and ecosystems. Protecting our oceans is essential for global environmental health.",

  "Art is a beautiful way to express emotions and ideas that transcend language. Painters, sculptors, and musicians create masterpieces that inspire and move people. Creative work offers an outlet for self-expression, providing a way to process complex emotions. Art can provoke thought, inspire change, and bring people together in shared experiences. It enriches cultures and leaves lasting legacies across generations.",

  "The Internet connects people all over the globe, breaking down geographical barriers. Social media allows instant communication with friends and family, creating global communities. Online shopping provides convenience and saves time, offering access to products worldwide. Digital platforms offer countless learning resources, from courses to research articles. The Internet has transformed communication, education, and commerce.",

  "Science unlocks the mysteries of the universe, helping us understand the world around us. Discoveries in physics explain how the world works, from gravity to quantum mechanics. Biology helps us understand living organisms and ecosystems, leading to medical advancements. Advances in medicine improve human health and longevity, curing diseases that once were fatal. Science drives innovation and shapes the future of humanity.",

  "Education is the key to unlocking potential and achieving dreams. Schools and universities foster growth and learning, preparing students for future careers. Lifelong learning keeps the mind sharp and curious, encouraging personal and professional growth. Knowledge empowers individuals to achieve their goals and make informed decisions. A strong education system benefits society as a whole by cultivating capable citizens.",

  "Teamwork is essential in both work and life, as collaboration leads to better outcomes. Working with others helps solve complex problems more effectively, combining diverse skills. Each team member brings unique talents to the table, enhancing the group's overall performance. Success is often a result of cooperative effort and clear communication among team members. Teamwork fosters innovation, creativity, and lasting professional relationships.",

  "Space exploration is the next frontier for humanity, filled with opportunities and challenges. Missions to Mars aim to understand the possibility of life beyond Earth, expanding our horizons. Telescopes allow us to glimpse faraway stars and galaxies, sparking awe and wonder. The universe holds endless possibilities for discovery, with unknown worlds waiting to be explored. The future of space travel could redefine human existence.",

  "Cooking is both an art and a science, combining creativity with precise techniques. Combining ingredients creates delicious meals and flavors, elevating simple foods to gourmet dishes. Experimenting with spices can transform a basic recipe into a culinary masterpiece. Cooking at home allows for healthier eating habits, promoting family bonding over shared meals. Mastering cooking skills brings joy and satisfaction to everyday life.",

  "Photography captures moments in time forever, preserving memories that last a lifetime. A picture can tell a story without needing words, conveying emotions and narratives. Great photographs evoke emotion and inspire thought, connecting viewers to the subject. The right lighting and composition create stunning images that captivate the eye. Photography allows people to see the world from new perspectives.",

  "Sports teach valuable life lessons like discipline, teamwork, and perseverance. Training and perseverance lead to improved performance, fostering a growth mindset. Team sports foster camaraderie and communication, building strong social bonds. Physical fitness promotes both mental and physical health, leading to overall well-being. Through sports, individuals develop resilience and leadership skills.",

  "Innovation drives progress in every industry, from technology to medicine. Creative ideas lead to new technologies and solutions, solving problems more efficiently. Entrepreneurs take risks to bring those ideas to life, driving economic growth and change. Continuous improvement is key to staying ahead of the competition in a rapidly evolving world. Innovation shapes the future, pushing the boundaries of what is possible.",
];

export const getRandomText = () => {
  return textSnippets[Math.floor(Math.random() * textSnippets.length)];
};
