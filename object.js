const backpack={
    name: "safari backpack",
    color: "red",
    weight: "1.5 kg",
    pocket: "6",
    volume: "5",
    lid: "open",
    straplength: {
        left :26,
        right:26,

    },
    togglelid: function (status) {
        this.lid = status;

    },
newstraplength: function (leftsize,rightsize){
this.straplength.left= leftsize;
this.straplength.right= righttsize;
},

};
console.log("backpack");
console.log(backpack.name);
console.log(backpack.straplength);
console.log(backpack.straplength.left);
console.log("before togglelid function backpack lid is;",backpack.lid)
console.log(backpack.togglelid("close"))
console.log("after togglelid function backpack lid is:", backpack.lid)











