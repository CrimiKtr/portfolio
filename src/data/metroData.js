// Paris Metro Data - Lines with official colors and station coordinates
// Coordinates are on a 1000x750 SVG canvas

export const metroLines = {
    '1': { color: '#FFCD00', name: 'Ligne 1' },
    '2': { color: '#003CA6', name: 'Ligne 2' },
    '3': { color: '#837902', name: 'Ligne 3' },
    '3b': { color: '#6EC4E8', name: 'Ligne 3bis' },
    '4': { color: '#CF009E', name: 'Ligne 4' },
    '5': { color: '#FF7E2E', name: 'Ligne 5' },
    '6': { color: '#6ECA97', name: 'Ligne 6' },
    '7': { color: '#FA9ABA', name: 'Ligne 7' },
    '7b': { color: '#6ECA97', name: 'Ligne 7bis' },
    '8': { color: '#E19BDF', name: 'Ligne 8' },
    '9': { color: '#B6BD00', name: 'Ligne 9' },
    '10': { color: '#C9910D', name: 'Ligne 10' },
    '11': { color: '#704B1C', name: 'Ligne 11' },
    '12': { color: '#007852', name: 'Ligne 12' },
    '13': { color: '#6EC4E8', name: 'Ligne 13' },
    '14': { color: '#62259D', name: 'Ligne 14' },
};

// Helper to create station entry
const s = (name, x, y, lines, alt = []) => ({ name, x, y, lines, alt });

export const metroStations = [
    // === LIGNE 1 (W→E) ===
    s('La Défense', 95, 330, ['1'], ['la defense']),
    s('Esplanade de La Défense', 125, 330, ['1'], ['esplanade de la defense']),
    s('Pont de Neuilly', 155, 330, ['1']),
    s('Les Sablons', 185, 330, ['1']),
    s('Porte Maillot', 215, 330, ['1']),
    s('Argentine', 260, 330, ['1']),
    s('Charles de Gaulle - Étoile', 295, 330, ['1', '2', '6'], ['charles de gaulle etoile', 'etoile', 'cdg etoile']),
    s('George V', 330, 340, ['1']),
    s('Franklin D. Roosevelt', 370, 340, ['1', '9'], ['franklin roosevelt', 'fdr']),
    s('Champs-Élysées - Clemenceau', 400, 350, ['1', '13'], ['champs elysees clemenceau']),
    s('Concorde', 430, 360, ['1', '8', '12']),
    s('Tuileries', 460, 360, ['1']),
    s('Palais Royal - Musée du Louvre', 490, 360, ['1', '7'], ['palais royal', 'palais royal musee du louvre']),
    s('Louvre - Rivoli', 520, 360, ['1'], ['louvre rivoli']),
    s('Châtelet', 550, 370, ['1', '4', '7', '11', '14'], ['chatelet']),
    s('Hôtel de Ville', 580, 370, ['1', '11'], ['hotel de ville']),
    s('Saint-Paul', 610, 370, ['1'], ['saint paul']),
    s('Bastille', 645, 380, ['1', '5', '8']),
    s('Gare de Lyon', 665, 410, ['1', '14']),
    s('Reuilly - Diderot', 700, 410, ['1', '8'], ['reuilly diderot']),
    s('Nation', 740, 400, ['1', '2', '6', '9']),
    s('Porte de Vincennes', 775, 400, ['1']),
    s('Saint-Mandé', 805, 400, ['1'], ['saint mande']),
    s('Bérault', 835, 400, ['1'], ['berault']),
    s('Château de Vincennes', 870, 400, ['1'], ['chateau de vincennes']),

    // === LIGNE 2 (Arc nord) ===
    s('Porte Dauphine', 220, 290, ['2']),
    s('Victor Hugo', 255, 290, ['2']),
    // CDG-Étoile already in L1
    s('Ternes', 295, 290, ['2']),
    s('Courcelles', 325, 280, ['2']),
    s('Monceau', 350, 270, ['2']),
    s('Villiers', 380, 260, ['2', '3']),
    s('Rome', 405, 250, ['2']),
    s('Place de Clichy', 430, 240, ['2', '13']),
    s('Blanche', 460, 235, ['2']),
    s('Pigalle', 485, 230, ['2', '12']),
    s('Anvers', 510, 225, ['2']),
    s('Barbès - Rochechouart', 535, 220, ['2', '4'], ['barbes rochechouart', 'barbes']),
    s('La Chapelle', 560, 215, ['2']),
    s('Stalingrad', 590, 220, ['2', '5', '7']),
    s('Jaurès', 615, 225, ['2', '5', '7b'], ['jaures']),
    s('Colonel Fabien', 640, 240, ['2']),
    s('Belleville', 660, 260, ['2', '11']),
    s('Couronnes', 675, 275, ['2']),
    s('Ménilmontant', 690, 290, ['2'], ['menilmontant']),
    s('Père Lachaise', 705, 310, ['2', '3'], ['pere lachaise']),
    s('Philippe Auguste', 720, 330, ['2']),
    s('Alexandre Dumas', 735, 350, ['2']),
    s('Avron', 750, 370, ['2']),
    // Nation already in L1

    // === LIGNE 3 ===
    s('Pont de Levallois - Bécon', 185, 250, ['3'], ['pont de levallois becon', 'pont de levallois']),
    s('Anatole France', 210, 260, ['3']),
    s('Louise Michel', 235, 265, ['3']),
    s('Porte de Champerret', 260, 270, ['3']),
    s('Pereire', 290, 270, ['3'], ['pereire']),
    s('Wagram', 320, 268, ['3']),
    // Villiers already in L2
    s('Europe', 400, 275, ['3']),
    s('Saint-Lazare', 420, 290, ['3', '12', '13', '14'], ['saint lazare']),
    s('Havre - Caumartin', 440, 300, ['3', '9'], ['havre caumartin']),
    s('Opéra', 465, 310, ['3', '7', '8'], ['opera']),
    s('Quatre-Septembre', 490, 315, ['3'], ['quatre septembre']),
    s('Bourse', 510, 320, ['3']),
    s('Sentier', 530, 330, ['3']),
    s('Réaumur - Sébastopol', 550, 340, ['3', '4'], ['reaumur sebastopol']),
    s('Arts et Métiers', 575, 340, ['3', '11'], ['arts et metiers']),
    s('Temple', 600, 335, ['3']),
    s('République', 625, 330, ['3', '5', '8', '9', '11'], ['republique']),
    s('Parmentier', 650, 320, ['3']),
    s('Rue Saint-Maur', 670, 315, ['3'], ['rue saint maur']),
    s('Père Lachaise', 705, 310, ['2', '3'], ['pere lachaise']),
    s('Gambetta', 730, 310, ['3', '3b']),
    s('Porte de Bagnolet', 760, 310, ['3']),
    s('Gallieni', 790, 310, ['3']),

    // === LIGNE 3bis ===
    // Gambetta already in L3
    s('Pelleport', 745, 295, ['3b']),
    s('Saint-Fargeau', 760, 285, ['3b'], ['saint fargeau']),
    s('Porte des Lilas', 775, 275, ['3b', '11']),

    // === LIGNE 4 (N→S) ===
    s('Porte de Clignancourt', 510, 175, ['4']),
    s('Simplon', 515, 195, ['4']),
    s('Marcadet - Poissonniers', 520, 210, ['4', '12'], ['marcadet poissonniers']),
    // Barbès already in L2
    s('Gare du Nord', 545, 250, ['4', '5'], ['gare du nord']),
    s('Gare de l\'Est', 560, 270, ['4', '5', '7'], ['gare de l est', 'gare de lest']),
    // Réaumur already in L3
    // Châtelet already in L1
    s('Cité', 540, 385, ['4'], ['cite']),
    s('Saint-Michel', 525, 400, ['4'], ['saint michel']),
    s('Odéon', 505, 415, ['4', '10'], ['odeon']),
    s('Saint-Germain-des-Prés', 490, 430, ['4'], ['saint germain des pres']),
    s('Saint-Sulpice', 475, 445, ['4'], ['saint sulpice']),
    s('Saint-Placide', 460, 460, ['4'], ['saint placide']),
    s('Montparnasse - Bienvenüe', 440, 475, ['4', '6', '12', '13'], ['montparnasse bienvenue', 'montparnasse']),
    s('Vavin', 460, 485, ['4']),
    s('Raspail', 475, 500, ['4', '6']),
    s('Denfert-Rochereau', 460, 520, ['4', '6'], ['denfert rochereau']),
    s('Mouton-Duvernet', 470, 540, ['4'], ['mouton duvernet']),
    s('Alésia', 475, 555, ['4'], ['alesia']),
    s('Porte d\'Orléans', 480, 575, ['4'], ['porte d orleans', 'porte dorleans']),
    s('Mairie de Montrouge', 485, 600, ['4']),

    // === LIGNE 5 ===
    s('Bobigny - Pablo Picasso', 780, 170, ['5'], ['bobigny pablo picasso', 'bobigny']),
    s('Bobigny - Pantin - Raymond Queneau', 760, 185, ['5'], ['bobigny pantin raymond queneau']),
    s('Église de Pantin', 740, 200, ['5'], ['eglise de pantin']),
    s('Hoche', 720, 215, ['5']),
    s('Porte de Pantin', 700, 230, ['5']),
    s('Ourcq', 680, 240, ['5']),
    s('Laumière', 660, 245, ['5'], ['laumiere']),
    s('Gare de l\'Est', 560, 270, ['4', '5', '7'], ['gare de l est']),
    // Stalingrad already in L2
    // Gare du Nord already in L4
    // République already in L3
    s('Oberkampf', 640, 350, ['5', '9']),
    s('Richard-Lenoir', 640, 365, ['5'], ['richard lenoir']),
    s('Bréguet - Sabin', 640, 380, ['5'], ['breguet sabin']),
    // Bastille already in L1
    s('Quai de la Rapée', 650, 410, ['5'], ['quai de la rapee']),
    s('Gare d\'Austerlitz', 620, 440, ['5', '10'], ['gare d austerlitz', 'gare dausterlitz']),
    s('Saint-Marcel', 610, 460, ['5'], ['saint marcel']),
    s('Campo-Formio', 600, 475, ['5'], ['campo formio']),
    s('Place d\'Italie', 585, 510, ['5', '6', '7'], ['place d italie', 'place ditalie']),

    // === LIGNE 6 (Arc sud) ===
    // CDG-Étoile already in L1
    s('Kléber', 290, 360, ['6'], ['kleber']),
    s('Boissière', 285, 380, ['6'], ['boissiere']),
    s('Trocadéro', 280, 400, ['6', '9'], ['trocadero']),
    s('Passy', 270, 420, ['6']),
    s('Bir-Hakeim', 265, 445, ['6'], ['bir hakeim']),
    s('Dupleix', 280, 460, ['6']),
    s('La Motte-Picquet - Grenelle', 300, 470, ['6', '8', '10'], ['la motte picquet grenelle']),
    s('Cambronne', 330, 475, ['6']),
    s('Sèvres - Lecourbe', 355, 478, ['6'], ['sevres lecourbe']),
    s('Pasteur', 380, 482, ['6', '12']),
    // Montparnasse already in L4
    s('Edgar Quinet', 445, 490, ['6']),
    // Raspail already in L4
    // Denfert-Rochereau already in L4
    s('Saint-Jacques', 480, 530, ['6'], ['saint jacques']),
    s('Glacière', 500, 520, ['6'], ['glaciere']),
    s('Corvisart', 530, 520, ['6']),
    // Place d'Italie already in L5
    s('Nationale', 600, 510, ['6']),
    s('Chevaleret', 620, 500, ['6']),
    s('Quai de la Gare', 640, 490, ['6']),
    s('Bercy', 660, 460, ['6', '14']),
    s('Dugommier', 680, 440, ['6']),
    s('Daumesnil', 700, 430, ['6', '8']),
    s('Bel-Air', 720, 420, ['6'], ['bel air']),
    s('Picpus', 740, 415, ['6']),
    // Nation already in L1

    // === LIGNE 7 ===
    s('La Courneuve - 8 Mai 1945', 610, 110, ['7'], ['la courneuve 8 mai 1945', 'la courneuve']),
    s('Fort d\'Aubervilliers', 600, 130, ['7'], ['fort d aubervilliers', 'fort daubervilliers']),
    s('Aubervilliers - Pantin - Quatre Chemins', 595, 150, ['7'], ['aubervilliers pantin quatre chemins']),
    s('Porte de la Villette', 590, 170, ['7']),
    s('Corentin Cariou', 588, 190, ['7']),
    s('Crimée', 590, 205, ['7'], ['crimee']),
    s('Riquet', 580, 215, ['7']),
    // Stalingrad already in L2
    // Gare de l'Est already in L4
    s('Poissonnière', 530, 280, ['7'], ['poissonniere']),
    s('Cadet', 510, 290, ['7']),
    s('Le Peletier', 495, 300, ['7']),
    s('Chaussée d\'Antin - La Fayette', 478, 305, ['7', '9'], ['chaussee d antin la fayette', 'chaussee d antin']),
    // Opéra already in L3
    s('Pyramides', 475, 340, ['7', '14']),
    // Palais Royal already in L1
    s('Pont Neuf', 520, 380, ['7']),
    // Châtelet already in L1
    s('Les Halles', 540, 355, ['4', '14'], ['les halles']),
    s('Château d\'Eau', 555, 290, ['4'], ['chateau d eau', 'chateau deau']),
    s('Strasbourg - Saint-Denis', 545, 300, ['4', '8', '9'], ['strasbourg saint denis']),
    s('Jussieu', 570, 430, ['7', '10']),
    s('Place Monge', 570, 450, ['7']),
    s('Censier - Daubenton', 575, 470, ['7'], ['censier daubenton']),
    s('Les Gobelins', 580, 490, ['7']),
    // Place d'Italie already in L5
    s('Tolbiac', 575, 535, ['7']),
    s('Maison Blanche', 570, 555, ['7']),
    s('Porte d\'Italie', 565, 575, ['7'], ['porte d italie', 'porte ditalie']),
    s('Porte de Choisy', 560, 595, ['7']),
    s('Porte d\'Ivry', 555, 615, ['7'], ['porte d ivry', 'porte divry']),
    s('Pierre et Marie Curie', 545, 630, ['7']),
    s('Mairie d\'Ivry', 535, 645, ['7'], ['mairie d ivry', 'mairie divry']),
    // Branch 7b (Villejuif)
    s('Le Kremlin-Bicêtre', 585, 550, ['7'], ['le kremlin bicetre']),
    s('Villejuif - Léo Lagrange', 595, 575, ['7'], ['villejuif leo lagrange']),
    s('Villejuif - Paul Vaillant-Couturier', 605, 600, ['7'], ['villejuif paul vaillant couturier']),
    s('Villejuif - Louis Aragon', 615, 625, ['7'], ['villejuif louis aragon']),

    // === LIGNE 7bis ===
    s('Louis Blanc', 600, 250, ['7b']),
    // Jaurès already in L2
    s('Bolivar', 630, 250, ['7b']),
    s('Buttes Chaumont', 650, 255, ['7b']),
    s('Botzaris', 665, 260, ['7b']),
    s('Place des Fêtes', 680, 265, ['7b'], ['place des fetes']),
    s('Pré-Saint-Gervais', 700, 265, ['7b'], ['pre saint gervais']),
    s('Danube', 690, 275, ['7b']),

    // === LIGNE 8 ===
    s('Balard', 210, 510, ['8']),
    s('Lourmel', 230, 500, ['8']),
    s('Boucicaut', 250, 490, ['8']),
    s('Félix Faure', 270, 480, ['8'], ['felix faure']),
    s('Commerce', 290, 475, ['8']),
    // La Motte-Picquet already in L6
    s('École Militaire', 320, 435, ['8'], ['ecole militaire']),
    s('La Tour-Maubourg', 340, 420, ['8'], ['la tour maubourg']),
    s('Invalides', 365, 400, ['8', '13']),
    // Concorde already in L1
    s('Madeleine', 440, 320, ['8', '12', '14']),
    // Opéra already in L3
    s('Richelieu - Drouot', 500, 300, ['8', '9'], ['richelieu drouot']),
    s('Grands Boulevards', 520, 295, ['8', '9']),
    s('Bonne Nouvelle', 540, 290, ['8', '9']),
    // Strasbourg-Saint-Denis already above
    // République already in L3
    s('Filles du Calvaire', 640, 340, ['8']),
    // Oberkampf already in L5
    s('Saint-Sébastien - Froissart', 640, 355, ['8'], ['saint sebastien froissart']),
    s('Chemin Vert', 635, 370, ['8']),
    s('Ledru-Rollin', 660, 395, ['8'], ['ledru rollin']),
    s('Faidherbe - Chaligny', 680, 400, ['8'], ['faidherbe chaligny']),
    // Reuilly-Diderot already in L1
    s('Montgallet', 710, 420, ['8']),
    // Daumesnil already in L6
    s('Michel Bizot', 710, 445, ['8']),
    s('Porte Dorée', 720, 460, ['8'], ['porte doree']),
    s('Porte de Charenton', 735, 470, ['8']),
    s('Liberté', 755, 480, ['8'], ['liberte']),
    s('Charenton - Écoles', 775, 490, ['8'], ['charenton ecoles']),
    s('École Vétérinaire de Maisons-Alfort', 800, 505, ['8'], ['ecole veterinaire de maisons alfort']),
    s('Maisons-Alfort - Stade', 825, 515, ['8'], ['maisons alfort stade']),
    s('Maisons-Alfort - Les Juilliottes', 850, 525, ['8'], ['maisons alfort les juilliottes']),
    s('Créteil - L\'Échat', 875, 540, ['8'], ['creteil l echat', 'creteil lechat']),
    s('Créteil - Université', 890, 555, ['8'], ['creteil universite']),
    s('Créteil - Préfecture', 905, 570, ['8'], ['creteil prefecture']),
    s('Pointe du Lac', 920, 585, ['8']),

    // === LIGNE 9 ===
    s('Pont de Sèvres', 115, 480, ['9'], ['pont de sevres']),
    s('Billancourt', 140, 470, ['9']),
    s('Marcel Sembat', 165, 460, ['9']),
    s('Porte de Saint-Cloud', 190, 445, ['9'], ['porte de saint cloud']),
    s('Exelmans', 210, 430, ['9']),
    s('Michel-Ange - Molitor', 230, 420, ['9', '10'], ['michel ange molitor']),
    s('Michel-Ange - Auteuil', 230, 440, ['9'], ['michel ange auteuil']),
    s('Jasmin', 240, 405, ['9']),
    s('Ranelagh', 250, 395, ['9']),
    s('La Muette', 260, 385, ['9']),
    s('Rue de la Pompe', 270, 370, ['9']),
    // Trocadéro already in L6
    s('Iéna', 295, 380, ['9'], ['iena']),
    s('Alma - Marceau', 320, 365, ['9'], ['alma marceau']),
    // Franklin D. Roosevelt already in L1
    s('Saint-Philippe du Roule', 385, 320, ['9'], ['saint philippe du roule']),
    s('Miromesnil', 400, 305, ['9', '13']),
    s('Saint-Augustin', 420, 300, ['9'], ['saint augustin']),
    // Havre-Caumartin already in L3
    // Chaussée d'Antin already in L7
    // Richelieu-Drouot already in L8
    // Grands Boulevards already in L8
    // Bonne Nouvelle already in L8
    // Strasbourg-Saint-Denis already
    // République already in L3
    // Oberkampf already in L5
    s('Saint-Ambroise', 660, 360, ['9'], ['saint ambroise']),
    s('Voltaire', 680, 370, ['9']),
    s('Charonne', 700, 380, ['9']),
    s('Rue des Boulets', 720, 385, ['9']),
    // Nation already in L1
    s('Buzenval', 760, 390, ['9']),
    s('Maraîchers', 780, 387, ['9'], ['maraichers']),
    s('Porte de Montreuil', 800, 385, ['9']),
    s('Robespierre', 830, 380, ['9']),
    s('Croix de Chavaux', 855, 375, ['9']),
    s('Mairie de Montreuil', 880, 370, ['9']),

    // === LIGNE 10 ===
    s('Boulogne - Pont de Saint-Cloud', 110, 430, ['10'], ['boulogne pont de saint cloud']),
    s('Boulogne - Jean Jaurès', 140, 420, ['10'], ['boulogne jean jaures']),
    // Michel-Ange Molitor already in L9
    s('Chardon Lagache', 240, 450, ['10']),
    s('Mirabeau', 250, 455, ['10']),
    s('Église d\'Auteuil', 258, 460, ['10'], ['eglise d auteuil', 'eglise dauteuil']),
    s('Porte d\'Auteuil', 215, 460, ['10'], ['porte d auteuil', 'porte dauteuil']),
    s('Javel - André Citroën', 260, 475, ['10'], ['javel andre citroen', 'javel']),
    s('Charles Michels', 280, 465, ['10']),
    // La Motte-Picquet already in L6
    s('Ségur', 330, 450, ['10'], ['segur']),
    s('Duroc', 360, 445, ['10', '13']),
    s('Vaneau', 380, 440, ['10']),
    s('Sèvres - Babylone', 400, 445, ['10', '12'], ['sevres babylone']),
    s('Mabillon', 470, 420, ['10']),
    // Odéon already in L4
    s('Cluny - La Sorbonne', 520, 415, ['10'], ['cluny la sorbonne']),
    s('Maubert - Mutualité', 540, 420, ['10'], ['maubert mutualite']),
    s('Cardinal Lemoine', 555, 430, ['10']),
    // Jussieu already in L7
    // Gare d'Austerlitz already in L5

    // === LIGNE 11 ===
    // Châtelet already in L1
    // Hôtel de Ville already in L1
    s('Rambuteau', 560, 350, ['11']),
    // Arts et Métiers already in L3
    // République already in L3
    s('Goncourt', 640, 310, ['11']),
    // Belleville already in L2
    s('Pyrénées', 680, 280, ['11'], ['pyrenees']),
    s('Jourdain', 695, 278, ['11']),
    s('Place des Fêtes', 680, 265, ['7b', '11'], ['place des fetes']),
    s('Télégraphe', 710, 268, ['11'], ['telegraphe']),
    // Porte des Lilas already in L3b
    s('Mairie des Lilas', 790, 265, ['11']),

    // === LIGNE 12 ===
    s('Front Populaire', 500, 150, ['12']),
    s('Porte de la Chapelle', 510, 180, ['12']),
    s('Marx Dormoy', 515, 200, ['12']),
    // Marcadet-Poissonniers already in L4
    s('Jules Joffrin', 490, 220, ['12']),
    s('Lamarck - Caulaincourt', 475, 235, ['12'], ['lamarck caulaincourt']),
    s('Abbesses', 465, 250, ['12']),
    // Pigalle already in L2
    s('Saint-Georges', 480, 265, ['12'], ['saint georges']),
    s('Notre-Dame-de-Lorette', 475, 280, ['12'], ['notre dame de lorette']),
    s('Trinité - d\'Estienne d\'Orves', 460, 290, ['12'], ['trinite d estienne d orves', 'trinite']),
    // Saint-Lazare already in L3
    // Madeleine already in L8
    // Concorde already in L1
    s('Assemblée Nationale', 410, 385, ['12'], ['assemblee nationale']),
    s('Solférino', 405, 405, ['12'], ['solferino']),
    s('Rue du Bac', 410, 420, ['12']),
    // Sèvres-Babylone already in L10
    s('Rennes', 430, 450, ['12']),
    s('Notre-Dame-des-Champs', 440, 465, ['12'], ['notre dame des champs']),
    // Montparnasse already in L4
    s('Falguière', 425, 480, ['12'], ['falguiere']),
    // Pasteur already in L6
    s('Volontaires', 380, 495, ['12']),
    s('Vaugirard', 365, 510, ['12']),
    s('Convention', 345, 520, ['12']),
    s('Porte de Versailles', 325, 540, ['12']),
    s('Corentin Celton', 305, 555, ['12']),
    s('Mairie d\'Issy', 285, 570, ['12'], ['mairie d issy', 'mairie dissy']),

    // === LIGNE 13 ===
    // Branch Asnières/Gennevilliers
    s('Les Agnettes', 370, 120, ['13']),
    s('Gabriel Péri', 365, 140, ['13'], ['gabriel peri']),
    s('Mairie de Clichy', 370, 160, ['13']),
    s('Porte de Clichy', 385, 185, ['13']),
    // Branch Saint-Denis
    s('Basilique de Saint-Denis', 530, 90, ['13']),
    s('Saint-Denis - Université', 540, 70, ['13'], ['saint denis universite']),
    s('Saint-Denis - Porte de Paris', 525, 110, ['13'], ['saint denis porte de paris']),
    s('Carrefour Pleyel', 510, 130, ['13']),
    s('Mairie de Saint-Ouen', 490, 145, ['13']),
    s('Garibaldi', 480, 160, ['13']),
    s('Porte de Saint-Ouen', 460, 185, ['13']),
    s('Guy Môquet', 445, 210, ['13'], ['guy moquet']),
    s('La Fourche', 430, 220, ['13']),
    s('Brochant', 405, 215, ['13']),
    // Place de Clichy already in L2
    s('Liège', 430, 265, ['13'], ['liege']),
    // Saint-Lazare already in L3
    // Miromesnil already in L9
    // Champs-Élysées-Clemenceau already in L1
    // Invalides already in L8
    s('Varenne', 370, 430, ['13']),
    // Duroc already in L10
    // Montparnasse already in L4
    s('Gaîté', 435, 500, ['13'], ['gaite']),
    s('Pernety', 430, 515, ['13']),
    s('Plaisance', 425, 535, ['13']),
    s('Porte de Vanves', 420, 555, ['13']),
    s('Malakoff - Plateau de Vanves', 410, 575, ['13'], ['malakoff plateau de vanves']),
    s('Malakoff - Rue Étienne Dolet', 400, 595, ['13'], ['malakoff rue etienne dolet']),
    s('Châtillon - Montrouge', 390, 615, ['13'], ['chatillon montrouge']),

    // === LIGNE 14 ===
    s('Saint-Denis Pleyel', 515, 80, ['14']),
    s('Mairie de Saint-Ouen', 490, 145, ['13', '14']),
    s('Porte de Clichy', 385, 185, ['13', '14']),
    s('Pont Cardinet', 395, 230, ['14']),
    // Saint-Lazare already in L3
    // Madeleine already in L8
    // Pyramides already in L7
    // Châtelet already in L1
    // Les Halles already above
    // Gare de Lyon already in L1
    // Bercy already in L6
    s('Cour Saint-Émilion', 670, 475, ['14'], ['cour saint emilion']),
    s('Bibliothèque François Mitterrand', 640, 510, ['14'], ['bibliotheque francois mitterrand', 'bibliotheque']),
    s('Olympiades', 620, 540, ['14']),
    s('Aéroport d\'Orly', 600, 660, ['14'], ['aeroport d orly', 'aeroport dorly', 'orly']),
];

// Build a search-friendly index
export function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[-']/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// Deduplicate stations (some appear in multiple line sections)
const seen = new Set();
export const uniqueStations = metroStations.filter(st => {
    const key = normalizeText(st.name);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
});

// Build search map: normalized name → station
export const stationSearchMap = new Map();
uniqueStations.forEach(st => {
    stationSearchMap.set(normalizeText(st.name), st);
    st.alt.forEach(alt => stationSearchMap.set(normalizeText(alt), st));
});

export const totalStationCount = uniqueStations.length;

// Explicit line route definitions (station names in correct order)
// This ensures lines are drawn properly without crossing
export const lineRoutes = {
    '1': ['La Défense', 'Esplanade de La Défense', 'Pont de Neuilly', 'Les Sablons', 'Porte Maillot', 'Argentine', 'Charles de Gaulle - Étoile', 'George V', 'Franklin D. Roosevelt', 'Champs-Élysées - Clemenceau', 'Concorde', 'Tuileries', 'Palais Royal - Musée du Louvre', 'Louvre - Rivoli', 'Châtelet', 'Hôtel de Ville', 'Saint-Paul', 'Bastille', 'Gare de Lyon', 'Reuilly - Diderot', 'Nation', 'Porte de Vincennes', 'Saint-Mandé', 'Bérault', 'Château de Vincennes'],
    '2': ['Porte Dauphine', 'Victor Hugo', 'Charles de Gaulle - Étoile', 'Ternes', 'Courcelles', 'Monceau', 'Villiers', 'Rome', 'Place de Clichy', 'Blanche', 'Pigalle', 'Anvers', 'Barbès - Rochechouart', 'La Chapelle', 'Stalingrad', 'Jaurès', 'Colonel Fabien', 'Belleville', 'Couronnes', 'Ménilmontant', 'Père Lachaise', 'Philippe Auguste', 'Alexandre Dumas', 'Avron', 'Nation'],
    '3': ['Pont de Levallois - Bécon', 'Anatole France', 'Louise Michel', 'Porte de Champerret', 'Pereire', 'Wagram', 'Villiers', 'Europe', 'Saint-Lazare', 'Havre - Caumartin', 'Opéra', 'Quatre-Septembre', 'Bourse', 'Sentier', 'Réaumur - Sébastopol', 'Arts et Métiers', 'Temple', 'République', 'Parmentier', 'Rue Saint-Maur', 'Père Lachaise', 'Gambetta', 'Porte de Bagnolet', 'Gallieni'],
    '3b': ['Gambetta', 'Pelleport', 'Saint-Fargeau', 'Porte des Lilas'],
    '4': ['Porte de Clignancourt', 'Simplon', 'Marcadet - Poissonniers', 'Barbès - Rochechouart', 'Gare du Nord', 'Gare de l\'Est', 'Château d\'Eau', 'Strasbourg - Saint-Denis', 'Réaumur - Sébastopol', 'Les Halles', 'Châtelet', 'Cité', 'Saint-Michel', 'Odéon', 'Saint-Germain-des-Prés', 'Saint-Sulpice', 'Saint-Placide', 'Montparnasse - Bienvenüe', 'Vavin', 'Raspail', 'Denfert-Rochereau', 'Mouton-Duvernet', 'Alésia', 'Porte d\'Orléans', 'Mairie de Montrouge'],
    '5': ['Bobigny - Pablo Picasso', 'Bobigny - Pantin - Raymond Queneau', 'Église de Pantin', 'Hoche', 'Porte de Pantin', 'Ourcq', 'Laumière', 'Jaurès', 'Stalingrad', 'Gare du Nord', 'Gare de l\'Est', 'République', 'Oberkampf', 'Richard-Lenoir', 'Bréguet - Sabin', 'Bastille', 'Quai de la Rapée', 'Gare d\'Austerlitz', 'Saint-Marcel', 'Campo-Formio', 'Place d\'Italie'],
    '6': ['Charles de Gaulle - Étoile', 'Kléber', 'Boissière', 'Trocadéro', 'Passy', 'Bir-Hakeim', 'Dupleix', 'La Motte-Picquet - Grenelle', 'Cambronne', 'Sèvres - Lecourbe', 'Pasteur', 'Montparnasse - Bienvenüe', 'Edgar Quinet', 'Raspail', 'Denfert-Rochereau', 'Saint-Jacques', 'Glacière', 'Corvisart', 'Place d\'Italie', 'Nationale', 'Chevaleret', 'Quai de la Gare', 'Bercy', 'Dugommier', 'Daumesnil', 'Bel-Air', 'Picpus', 'Nation'],
    '7': ['La Courneuve - 8 Mai 1945', 'Fort d\'Aubervilliers', 'Aubervilliers - Pantin - Quatre Chemins', 'Porte de la Villette', 'Corentin Cariou', 'Crimée', 'Riquet', 'Stalingrad', 'Gare de l\'Est', 'Poissonnière', 'Cadet', 'Le Peletier', 'Chaussée d\'Antin - La Fayette', 'Opéra', 'Pyramides', 'Palais Royal - Musée du Louvre', 'Pont Neuf', 'Châtelet', 'Jussieu', 'Place Monge', 'Censier - Daubenton', 'Les Gobelins', 'Place d\'Italie', 'Tolbiac', 'Maison Blanche', 'Porte d\'Italie', 'Porte de Choisy', 'Porte d\'Ivry', 'Pierre et Marie Curie', 'Mairie d\'Ivry'],
    '7v': ['Place d\'Italie', 'Le Kremlin-Bicêtre', 'Villejuif - Léo Lagrange', 'Villejuif - Paul Vaillant-Couturier', 'Villejuif - Louis Aragon'],
    '7b': ['Louis Blanc', 'Jaurès', 'Bolivar', 'Buttes Chaumont', 'Botzaris', 'Place des Fêtes', 'Pré-Saint-Gervais', 'Danube'],
    '8': ['Balard', 'Lourmel', 'Boucicaut', 'Félix Faure', 'Commerce', 'La Motte-Picquet - Grenelle', 'École Militaire', 'La Tour-Maubourg', 'Invalides', 'Concorde', 'Madeleine', 'Opéra', 'Richelieu - Drouot', 'Grands Boulevards', 'Bonne Nouvelle', 'Strasbourg - Saint-Denis', 'République', 'Filles du Calvaire', 'Saint-Sébastien - Froissart', 'Chemin Vert', 'Bastille', 'Ledru-Rollin', 'Faidherbe - Chaligny', 'Reuilly - Diderot', 'Montgallet', 'Daumesnil', 'Michel Bizot', 'Porte Dorée', 'Porte de Charenton', 'Liberté', 'Charenton - Écoles', 'École Vétérinaire de Maisons-Alfort', 'Maisons-Alfort - Stade', 'Maisons-Alfort - Les Juilliottes', 'Créteil - L\'Échat', 'Créteil - Université', 'Créteil - Préfecture', 'Pointe du Lac'],
    '9': ['Pont de Sèvres', 'Billancourt', 'Marcel Sembat', 'Porte de Saint-Cloud', 'Exelmans', 'Michel-Ange - Molitor', 'Michel-Ange - Auteuil', 'Jasmin', 'Ranelagh', 'La Muette', 'Rue de la Pompe', 'Trocadéro', 'Iéna', 'Alma - Marceau', 'Franklin D. Roosevelt', 'Saint-Philippe du Roule', 'Miromesnil', 'Saint-Augustin', 'Havre - Caumartin', 'Chaussée d\'Antin - La Fayette', 'Richelieu - Drouot', 'Grands Boulevards', 'Bonne Nouvelle', 'Strasbourg - Saint-Denis', 'République', 'Oberkampf', 'Saint-Ambroise', 'Voltaire', 'Charonne', 'Rue des Boulets', 'Nation', 'Buzenval', 'Maraîchers', 'Porte de Montreuil', 'Robespierre', 'Croix de Chavaux', 'Mairie de Montreuil'],
    '10': ['Boulogne - Pont de Saint-Cloud', 'Boulogne - Jean Jaurès', 'Michel-Ange - Molitor', 'Chardon Lagache', 'Mirabeau', 'Église d\'Auteuil', 'Porte d\'Auteuil', 'Javel - André Citroën', 'Charles Michels', 'La Motte-Picquet - Grenelle', 'Ségur', 'Duroc', 'Vaneau', 'Sèvres - Babylone', 'Mabillon', 'Odéon', 'Cluny - La Sorbonne', 'Maubert - Mutualité', 'Cardinal Lemoine', 'Jussieu', 'Gare d\'Austerlitz'],
    '11': ['Châtelet', 'Hôtel de Ville', 'Rambuteau', 'Arts et Métiers', 'République', 'Goncourt', 'Belleville', 'Pyrénées', 'Jourdain', 'Place des Fêtes', 'Télégraphe', 'Porte des Lilas', 'Mairie des Lilas'],
    '12': ['Front Populaire', 'Porte de la Chapelle', 'Marx Dormoy', 'Marcadet - Poissonniers', 'Jules Joffrin', 'Lamarck - Caulaincourt', 'Abbesses', 'Pigalle', 'Saint-Georges', 'Notre-Dame-de-Lorette', 'Trinité - d\'Estienne d\'Orves', 'Saint-Lazare', 'Madeleine', 'Concorde', 'Assemblée Nationale', 'Solférino', 'Rue du Bac', 'Sèvres - Babylone', 'Rennes', 'Notre-Dame-des-Champs', 'Montparnasse - Bienvenüe', 'Falguière', 'Pasteur', 'Volontaires', 'Vaugirard', 'Convention', 'Porte de Versailles', 'Corentin Celton', 'Mairie d\'Issy'],
    '13a': ['Les Agnettes', 'Gabriel Péri', 'Mairie de Clichy', 'Porte de Clichy', 'Brochant', 'La Fourche'],
    '13b': ['Saint-Denis - Université', 'Basilique de Saint-Denis', 'Saint-Denis - Porte de Paris', 'Carrefour Pleyel', 'Mairie de Saint-Ouen', 'Garibaldi', 'Porte de Saint-Ouen', 'Guy Môquet', 'La Fourche'],
    '13': ['La Fourche', 'Place de Clichy', 'Liège', 'Saint-Lazare', 'Miromesnil', 'Champs-Élysées - Clemenceau', 'Invalides', 'Varenne', 'Duroc', 'Montparnasse - Bienvenüe', 'Gaîté', 'Pernety', 'Plaisance', 'Porte de Vanves', 'Malakoff - Plateau de Vanves', 'Malakoff - Rue Étienne Dolet', 'Châtillon - Montrouge'],
    '14': ['Saint-Denis Pleyel', 'Mairie de Saint-Ouen', 'Porte de Clichy', 'Pont Cardinet', 'Saint-Lazare', 'Madeleine', 'Pyramides', 'Châtelet', 'Les Halles', 'Gare de Lyon', 'Bercy', 'Cour Saint-Émilion', 'Bibliothèque François Mitterrand', 'Olympiades', 'Aéroport d\'Orly'],
};

// Build coordinate lookup from unique stations
const stationCoordMap = new Map();
uniqueStations.forEach(st => stationCoordMap.set(st.name, st));

// Resolve routes to coordinate arrays
export function getLineCoords(lineId) {
    const route = lineRoutes[lineId];
    if (!route) return [];
    return route
        .map(name => stationCoordMap.get(name))
        .filter(Boolean)
        .map(st => ({ x: st.x, y: st.y, name: st.name }));
}
