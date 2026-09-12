const fs = require('fs');
const files = ['index.html', 'recap.html', 'characters.html', 'lore.html', 'community.html', 'inventory.html', 'portraits.html'];

const navLinks = \
            <div class=\"nav-links\">
                <a href=\"characters.html\">Characters</a>
                <a href=\"recap.html\">Recap</a>
                <a href=\"lore.html\">Lore</a>
                <a href=\"inventory.html\">Inventory</a>
                <a href=\"map.html\">World Map</a>
                <a href=\"portraits.html\">Portraits</a>
                <a href=\"quiz.html\">Quiz</a>
                <a href=\"compare.html\">Compare</a>
                <a href=\"cards.html\">Cards</a>
                <a href=\"community.html\">Community</a>
            </div>
\.trim();

const mobileMenu = \
        <div class=\"mobile-menu\" id=\"mobile-menu\">
            <a href=\"characters.html\">Characters</a>
            <a href=\"recap.html\">Recap</a>
            <a href=\"lore.html\">Lore</a>
            <a href=\"inventory.html\">Inventory</a>
            <a href=\"map.html\">World Map</a>
            <a href=\"portraits.html\">Portraits</a>
            <a href=\"quiz.html\">Quiz</a>
            <a href=\"compare.html\">Compare</a>
            <a href=\"cards.html\">Cards</a>
            <a href=\"community.html\">Community</a>
            <a href=\"characters.html\" class=\"nav-cta\">Enter the Rift</a>
        </div>
\.trim();

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace nav-links block
    content = content.replace(/<div class=\"nav-links\">[\s\S]*?<\/div>/g, navLinks);
    
    // Replace mobile-menu block
    content = content.replace(/<div class=\"mobile-menu\" id=\"mobile-menu\">[\s\S]*?<\/div>/g, mobileMenu);
    
    // Some files might have missing spaces due to minification by previous agents, so let's format it.
    
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
});
