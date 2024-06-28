const map = {
    "india":[
        "Andhra Pradesh", "Madhya Pradesh", "Tripura", "Arunachal Pradesh", "Maharashtra",
        "Uttar Pradesh", "Assam", "Manipur", "Uttarakhand", "Bihar", "Meghalaya", "West Bengal",
        "Chhattisgarh", "Mizoram", "Andaman and Nicobar Islands", "Goa", "Nagaland", "Chandigarh", 
        "Gujarat", "Odisha", "Dadra and Nagar Haveli and Daman and Diu", "Haryana", "Punjab", 
        "Jammu and Kashmir", "Himachal Pradesh", "Rajasthan", "Ladakh", "Jharkhand", "Sikkim", 
        "Lakshadweep", "Karnataka", "Tamil Nadu", "Delhi", "Kerala", "Telangana", "Puducherry"
    ],
    "west bengal":[
        "North 24 Parganas", "South 24 Parganas", "Purba Bardhaman", "Paschim Bardhaman", "Murshidabad",
        "West Midnapore", "Hooghly", "Nadia", "East Midnapore", "Howrah", "Kolkata", "Maldah", "Jalpaiguri",
        "Alipurduar", "Bankura", "Birbhum", "North Dinajpur", "Purulia", "Cooch Behar", "Darjeeling",
        "Dakshin Dinajpur", "Kalimpong", "Jhargram"	
    ],
    "north 24 parganas":[
        "Bagdah", "Bangaon Uttar", "Bangaon Dakshin", "Gaighata", "Swarupnagar", "Baduria	Basirhat", 
        "Habra", "Ashokenagar", "Amdanga", "Bijpur", "Naihati", "Bhatpara", "Jagatdal", "Noapara",
        "Barrackpore", "Khardaha", "Dum Dum Uttar", "Panihati", "Kamarhati", "Baranagar", "Dum Dum",
        "Rajarhat New Town", "Bidhannagar", "Rajarhat Gopalpur", "Madhyamgram", "Barasat", "Deganga", 
        "Haroa", "Minakhan", "Sandeshkhali", "Basirhat Dakshin", "Basirhat Uttar", "Hingalganj"
    ],
    "South 24 Parganas":[
        "Gosaba", "Basanti", "Kultali", "Patharpratima", "Kakdwip", "Sagar", "Kulpi", "Raidighi", 
        "Mandirbazar", "Jaynagar", "Baruipur Purba", "Canning Paschim", "Canning Purba", 
        "Baruipur Paschim", "Magrahat Purba", "Magrahat Paschim", "Diamond Harbour", "Falta", "Satgachia", 
        "Bishnupur", "Sonarpur Dakshin", "Bhangar", "Kasba", "Jadavpur", "Sonarpur Uttar", "Tollygunge", 
        "Behala Purba", "Behala Paschim", "Maheshtala", "Budge Budge", "Metiaburuz"
    ],
    "purba bardhaman":[
        "Bardhaman Sadar North", "Bardhaman Sadar South", "Katwa", "Kalna", "Purba Bardhaman district"
    ],
    "paschim bardhaman":[
        "Asansol Sadar", "Durgapur", "Paschim Bardhaman district"
    ],
    "murshidabad": [
        "Farakka", "Samserganj", "Suti", "Jangipur", "Raghunathganj", "Sagardighi", "Lalgola", 
        "Bhagabangola", "Raninagar", "Murshidabad", "Nabagram", "Khargram", "Domkal", 
        "Jalangi", "Burwan", "Kandi", "Bharatpur", "Rejinagar", "Beldanga", "Baharampur", 
        "Hariharpara", "Naoda"
    ],
    "west midnapore":[
        "Medinipur Sadar", "Kharagpur", "Ghatal"
    ],
    "hooghly":[
        "Jangipara", "Chanditala", "Uttarpara", "Serampore", "Champdani", "Chandernagore",
        "Singur", "Haripal", "Tarakeswar", "Chinsurah", "Saptagram", "Balagarh", "Pandua",
        "Dhaniakhali", "Pursurah", "Khanakul", "Arambagh", "Goghat"
    ],
    "nadia": [
        "Karimpur", "Tehatta", "Palashipara", "Kaliganj", "Nakshipara", "Chapra", 
        "Krishnanagar Uttar", "Nabadwip", "Krishnanagar Dakshin", "Santipur", 
        "Ranaghat Uttar Paschim", "Krishnaganj (SC)", "Ranaghat Uttar Purba (SC)", 
        "Ranaghat Dakshin (SC)", "Chakdaha", "Kalyani (SC)", "Haringhata (SC)"
    ],
    "east medinapore": [
        "Tamluk", "Panskura Purba", "Panskura Paschim", "Moyna", "Nandakumar", 
        "Mahisadal", "Haldia (SC)", "Nandigram", "Chandipur", "Patashpur", 
        "Kanthi Uttar", "Bhagabanpur", "Khejuri (SC)", "Kanthi Dakshin", 
        "Ramnagar", "Egra"
    ],
    "howrah": [
        "Domjur", "Jagatballavpur", "Udaynarayanpur", "Amta", "Bagnan", 
        "Shyampur", "Uluberia Dakshin", "Uluberia Uttar (SC)", "Uluberia Purba", 
        "Panchla", "Sankrail (SC)", "Howrah Dakshin", "Shibpur", "Howrah Madhya", 
        "Howrah Uttar", "Bally"
    ],
    "kolkata":[
        "kolkata uttar", "Chowrangee", "Entally", "Beleghata", "Jorasanko", "Shyampukur", "Maniktala",
        "Kashipur-Belgachhia", "Kolkata Dakshin", "Bhabanipur", "Rashbehari", "Ballygunge"
    ],
    "maldah": [
        "Habibpur (ST)", "Gazole (SC)", "Chanchal", "Harishchandrapur", 
        "Malatipur", "Ratua", "Manikchak", "Maldaha (SC)", 
        "English Bazar", "Mothabari", "Sujapur", "Baisnabnagar"
    ],
    "jalpaiguri": [
        "Dhupguri", "Maynaguri", "Jalpaiguri", 
        "Rajganj", "Dabgram-Phulbari", "Mal", "Nagrakata"
    ],
    "alipurduar": [
        "Kumargram", "Kalchini", "Alipurduars", "Falakata", "Madarihat"
    ],
    "bankura": [
        "Saltora", "Chhatna", "Ranibandh", "Raipur", "Taldangra", "Bankura", "Barjora", "Onda", 
        "Bishnupur", "Katulpur", "Indas", "Sonamukhi"
    ],
    "birbhum": [
        "Dubrajpur", "Suri", "Bolpur", "Nanoor", "Labpur", "Sainthia", "Mayureswar", "Rampurhat", 
        "Hansan", "Nalhati", "Murarai"
    ],
    "north dinajpur": [
        "Chopra", "Islampur", "Goalpokhar", "Chakulia", "Karandighi", "Hemtabad", "Kaliaganj", 
        "Raiganj", "Itahar"
    ],
    "purulia":[
        "Purulia-I", "Purulia-II", "Hura", "Balarampur", "Arsha"
    ],
    "cooch behar": [
        "Mekliganj", "Mathabhanga", "Cooch Behar Uttar", "Cooch Behar Dakshin", "Sitalkuchi", "Sitai", 
        "Dinhata", "Natabari", "Tufanganj"
    ],
    "darjeeling":[
        "Darjeeling", "Kurseong", "Matigara-Naxalbari", "Siliguri", "Phansidewa"
    ],
    "dakshin dinajpur": [
        "Kushmandi", "Kumarganj", "Balurghat", "Tapan", "Gangarampur", "Harirampur"
    ],
    "kalimpong":[
        "Bong", "Kalimpong", "Samalbong", "Tista", "Dr. Graham's Homes", "Lower Echhay", "Samthar", "Neembong", "Dungra", "Upper Echhay", "Seokbir", "Bhalukhop", "Yangmakum", "Pabringtar", "Sindebong", "Kafer Kanke Bong", "Pudung and Tashiding", "Dalapchand", "Gitdabling", "Lava-Gitabeong", "Lolay", "Payong", "Shangse", "Shantuk", "Dalim", "Gorubathan-I", "Gorubathan-II", "Patengodak", "Todey Tangta", "Kumai", "Pokhreybong", "Samsing", "Aahaley", "Nim and Rongo", "Kage", "Kashyong", "Lingsey", "Lingseykha", "Pedong and Syakiyong"
    ],
    "jhargram":[
        "Jhargram", "Jamboni", "Binpur-I", "Binpur-II", "Gopiballavpur-I", "Gopiballvapur-II","Sankrail",
        "Nayagram"
    ]
}   