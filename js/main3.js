// var allInfo = {
//     allDistrict: {
//         district: "전국",
//         region: {
//             regionName: "전국1",
//             pention: {
//                 pentionName: "플로라",
//                 remodel: false,
//                 newOpen: true
//             },
//             regionName: "전국2",
//             pention: {
//                 pentionName: "아델하임",
//                 remodel: true,
//                 newOpen: true
//             },
//             regionName: "전국3",
//             pention: {
//                 pentionName: "물망초",
//                 remodel: false,
//                 newOpen: false
//             },
//             regionName: "전국4",
//             pention: {
//                 pentionName: "물망초",
//                 remodel: false,
//                 newOpen: false
//             },
//             regionName: "전국5",
//             pention: {
//                 pentionName: "물망초",
//                 remodel: false,
//                 newOpen: false
//             }
            
//         },
//     },
//     gyunggi: {
//         district: "경기도",
//         region: {
//             regionName: "가평",
//             pention: {
//                 pentionName: "아데로",
//                 remodel: false,
//                 newOpen: true
//             }
//         }
//     }

// };

var allDistrict = {
    district1: "전국",
    region1: {
        regionName: "전국1",
        pention1: {
            pentionName: "플로라",
            newOpen: true,
            remodel: true
        }
    },
    region2: {
        regionName: "전국2",
        pention1: {
            pentionName: "아델하임",
            newOpen: false,
            remodel: false
        }
    },
    region3: {
        regionName: "전국3",
        pention1: {
            pentionName: "아델하임",
            newOpen: false,
            remodel: false
        }
    },
    region4: {
        regionName: "전국4",
        pention1: {
            pentionName: "아델하임",
            newOpen: false,
            remodel: false
        }
    },
    region5: {
        regionName: "전국5",
        pention1: {
            pentionName: "아델하임",
            newOpen: false,
            remodel: false
        }
    }
}

console.log(allDistrict.region3.pention1);
document.write(allDistrict.region3.pention1.remodel);