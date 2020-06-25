const champions  = [
    {
        id: "1",
        name: "Aatrox",
        title: "THE DARKIN BLADE",
        type: "fighter",
        homeImage: require("./pictures/aatroxs.jpg"),
        backgroundImage: require("./pictures/aatrox_big.jpg"),
        biography: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
        pImage: require("./pictures/skills/aattrox_passive.png"),
        qImage: require("./pictures/skills/aattrox_q.png"),
        wImage: require("./pictures/skills/aattrox_w.png"),
        eImage: require("./pictures/skills/aattrox_e.png"),
        rImage: require("./pictures/skills/aattrox_r.png"),
        pName: "DEATHBRINGER STANCE",
        qName: "THE DARKIN BLADE",
        wName: "INFERNAL CHAINS",
        eName: "UMBRAL DASH",
        rName: "WORLD ENDER",
        pDescription: "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.",
        qDescription: "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
        wDescription: "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
        eDescription: "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
        rDescription: "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.",
        roles: [
            {
                id: "aa1",
                name: "top"
            },
            {
                id: "aa2",
                name: "mid"
            },
            {
                id: "aa3",           
                name: "jungle"
            }
        ],
    },
    {
        id: "2",
        name: "Ahri",
        title: "The Nine-Tailed Fox",
        type: "mage",
        homeImage: require("./pictures/ahri.jpg"),
        backgroundImage: require("./pictures/ahri_big.jpg"),
        biography: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
        pImage: require("./pictures/skills/ahri_passive.png"),
        qImage: require("./pictures/skills/ahri_q.png"),
        wImage: require("./pictures/skills/ahri_w.png"),
        eImage: require("./pictures/skills/ahri_e.png"),
        rImage: require("./pictures/skills/ahri_r.png"),
        pName: "VASTAYAN GRACE",
        qName: "ORB OF DECEPTION",
        wName: "FOX-FIRE",
        eName: "CHARM",
        rName: "SPIRIT RUSH",
        pDescription:"Whenever Ahri's spells hit a champion 2 times within a short period, she briefly gains movement speed.",
        qDescription: "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. After earning several spell hits, Ahri's next orb hits will restore her health.",
        wDescription: "Ahri releases three fox-fires, that lock onto and attack nearby enemies.",
        eDescription: "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her. The target temporarily takes increased damage from Ahri.",
        rDescription: "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.",
        roles: [
            {
                id: "ah1",
                name: "mid"
            }
        ],
    },
    {
        id: "3",
        name: "Amumu",
        title: "The Sad Mummy",
        type: "tank",
        homeImage: require("./pictures/amumu.jpg"),
        backgroundImage: require("./pictures/amumu_big.jpg"),
        biography: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
        pImage: require("./pictures/skills/amumu_passive.png"),
        qImage: require("./pictures/skills/amumu_q.png"),
        wImage: require("./pictures/skills/amumu_w.png"),
        eImage: require("./pictures/skills/amumu_e.png"),
        rImage: require("./pictures/skills/amumu_r.png"),
        pName: "CURSED TOUCH",
        qName: "BANDAGE TOSS",
        wName: "DESPAIR",
        eName: "TANTRUM",
        rName: "CURSE OF THE SAD MUMMY",
        pDescription:"Amumu's basic attacks Curse his enemies, causing them to take bonus true damage from incoming magic damage.",
        qDescription: "Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.",
        wDescription: "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed.",
        eDescription: "Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced by 0.5 seconds.",
        rDescription: "Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging them and rendering them unable to attack or move.",
        roles: [
            {
                id: "am2",
                name: "jungle"
            },
            
        ],
    },
    {
        id: "4",
        name: "Zed",
        title: "The Master Of Shadows",
        type: "assassin",
        homeImage: require("./pictures/zed.jpg"),
        backgroundImage: require("./pictures/zed_big.jpg"),
        biography: "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock the secret shadow form—a malevolent spirit magic as dangerous and corrupting as it is powerful. Zed has mastered all of these forbidden techniques to destroy anything he sees as a threat to his nation, or his new order.",
        pImage: require("./pictures/skills/zed_passive.png"),
        qImage: require("./pictures/skills/zed_q.png"),
        wImage: require("./pictures/skills/zed_w.png"),
        eImage: require("./pictures/skills/zed_e.png"),
        rImage: require("./pictures/skills/zed_r.png"),
        pName: "CONTEMPT FOR THE WEAK",
        qName: "RAZOR SHURIKEN",
        wName: "LIVING SHADOW",
        eName: "SHADOW SLASH",
        rName: "DEATH MARK",
        pDescription: "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds on the same target.",
        qDescription: "Zed and his shadows throw their shurikens. Each shuriken deals damage to every enemy hit.",
        wDescription: "Passive: Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability. Active: Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
        eDescription: "Zed and his shadows slash, dealing damage to nearby enemies.",
        rDescription: "Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",
        roles: [
            {
                id: "ze1",
                name: "mid"
            }
        ],
    },
    {
        id: "5",
        name: "Senna",
        title: "The Redeemer",
        type: "marksmen",
        homeImage: require("./pictures/senna.jpg"),
        backgroundImage: require("./pictures/senna_big.jpg"),
        biography: "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel wraith Thresh. But refusing to lose hope, within the lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic weapon, redeeming the souls lost within.",
        pImage: require("./pictures/skills/senna_passive.png"),
        qImage: require("./pictures/skills/senna_q.png"),
        wImage: require("./pictures/skills/senna_w.png"),
        eImage: require("./pictures/skills/senna_e.png"),
        rImage: require("./pictures/skills/senna_r.png"),
        pName: "ABSOLUTION",
        qName: "PIERCING DARKNESS",
        wName: "LAST EMBRACE",
        eName: "CURSE OF THE BLACK MIST",
        rName: "DAWNING SHADOW",
        pDescription: "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. Attacks from Senna's Relic Cannon take longer to fire, deals bonus damage , and briefly grant her a portion of her target's Movement Speed.",
        qDescription: "From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.",
        wDescription: "Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.",
        eDescription: "Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased movement speed, are unselectable, and hide their identities.",
        rDescription: "Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.",
        roles: [
            {
                id: "se1",
                name: "support"
            },
            {
                id: "se2",
                name: "adc"
            }
           
        ],
    },
    {
        id: "6",
        name: "Alistar",
        title: "The Minotaur",
        type: "tank",
        homeImage: require("./pictures/alistar.jpg"),
        backgroundImage: require("./pictures/alistar_big.jpg"),
        biography: "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
        pImage: require("./pictures/skills/alistar_passive.png"),
        qImage: require("./pictures/skills/alistar_q.png"),
        wImage: require("./pictures/skills/alistar_w.png"),
        eImage: require("./pictures/skills/alistar_e.png"),
        rImage: require("./pictures/skills/alistar_r.png"),
        pName: "TRIUMPHANT ROAR",
        qName: "PULVERIZE",
        wName: "HEADBUTT",
        eName: "TRAMPLE",
        rName: "UNBREAKABLE WILL",
        pDescription: "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself and all nearby allied champions.",
        qDescription: "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
        wDescription: "Alistar rams a target with his head, dealing damage and knocking the target back.",
        eDescription: "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
        rDescription: "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
        roles: [
            {
                id: "al1",
                name: "support"
            }
        ],
    },
    {
        id: "7",
        name: "Aurelion Sol",
        title: "The Star Forger",
        type: "mage",
        homeImage: require("./pictures/aurelionsol.jpg"),
        backgroundImage: require("./pictures/aurelionsol_big.jpg"),
        biography: "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
        pImage: require("./pictures/skills/aurelionsol_passive.png"),
        qImage: require("./pictures/skills/aurelionsol_q.png"),
        wImage: require("./pictures/skills/aurelionsol_w.png"),
        eImage: require("./pictures/skills/aurelionsol_e.png"),
        rImage: require("./pictures/skills/aurelionsol_r.png"),
        pName: "CENTER OF THE UNIVERSE",
        qName: "STARSURGE",
        wName: "CELESTIAL EXPANSION",
        eName: "COMET OF LEGEND",
        rName: "VOICE OF LIGHT",
        pDescription: "Stars orbit Aurelion Sol, dealing magic damage when they hit an enemy.",
        qDescription: "Aurelion Sol creates an expanding disk, which explodes to stun and damage enemies when it moves too far away from him.",
        wDescription: "Aurelion Sol pushes his stars farther out, increasing their damage and speed.",
        eDescription: "Aurelion Sol takes off flying for a long distance.",
        rDescription: "Aurelion Sol projects a blast of pure starfire, damaging and slowing all enemies caught in it and knocking nearby enemies back to a safer distance.",
        roles: [
            {
                id: "se1",
                name: "mid"
            },
        ],
    },
    {
        id: "8",
        name: "Yasuo",
        title: "The Unforgiven",
        type: "fighter",
        homeImage: require("./pictures/yasuo.jpg"),
        backgroundImage: require("./pictures/yasuo_big.jpg"),
        biography: "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
        pImage: require("./pictures/skills/yasuo_passive.png"),
        qImage: require("./pictures/skills/yasuo_q.png"),
        wImage: require("./pictures/skills/yasuo_w.png"),
        eImage: require("./pictures/skills/yasuo_e.png"),
        rImage: require("./pictures/skills/yasuo_r.png"),
        pName: "WAY OF THE WANDERER",
        qName: "STEEL TEMPEST",
        wName: "WIND WALL",
        eName: "SWEEPING BLADE",
        rName: "LAST BREATH",
        pDescription: "Yasuo's Critical Strike Chance is doubled. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.",
        qDescription: "Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne. Steel Tempest is treated as a basic attack and scales with all the same things.",
        wDescription: "Creates a moving wall that blocks all enemy projectiles for 4 seconds.",
        eDescription: "Dashes through target enemy, dealing magic damage. Each cast increases your next dash's base Damage, up to a max amount. Cannot be re-cast on the same enemy for a few seconds. If Steel Tempest is cast while dashing, it will strike as a circle.",
        rDescription: "Blinks to an Airborne enemy champion, dealing physical damage and holding all Airborne enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm. For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
        roles: [
            {
                id: "se1",
                name: "mid"
            },
            {
                id: "se2",
                name: "top"
            }
           
        ],
    },
]

export default champions;