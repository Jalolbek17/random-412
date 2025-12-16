import express from "express";
import cors from "cors";

const app = express();
app.use(express.static("public"));
app.use(cors());

const name = [
    "ABDUSSAMI BAXROMOV",
    "ADHAMJON AHMADJONOV",
    "AZIMJON ABDUMANNONOV",
    "BOSITXON ZOKIRJONOV",
    "DAVRONBEK SHARIPOV",
    "DILAFRUZ NIZOMIDDINOVA",
    "DILMURODJON SOTIBOLDIYEV",
    "DURDONA NURXONOVA",
    "ELSHOD NAZAROV",
    "FARANGIZ SHOYQULOVA",
    "GULSHODA IKROMOVA",
    "HAMIDULLOH ERMO'MINOV",
    "IBROXIM BAXTIYOROV",
    "ILXOMJON TOXIROV",
    "ISMOIL RASULOV",
    "JALOLBEK OMONGALDIYEV",
    "LAZIZ AZIZOV",
    "MIRAZIZ TASHTEMIROV",
    "MUXAMMADALI BOTIROV",
    "NURSULTAN YAXMUDOV",
    "OLIMJON ABDUHAMIDOV",
    "OZODJON SIDDIQOV",
    "RASULJON ORTIGALIYEV",
    "RO'ZIMUXAMMADXON ARTIKOV",
    "SHOHNAZAR ABDUSALOMOV",
    "SUXROB BERDIMURODOV",
    "TEMURBEK QURBONBOYEV",
    "UMIDJON ABDUJABBOROV"
];

function RandomFnc(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

app.get("/students", (req, res) => {
    res.json({ name: RandomFnc(name) });
});


app.listen(1717, () =>
    console.log("http://localhost:1717")
);
