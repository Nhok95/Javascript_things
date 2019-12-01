
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generate(groupSize, groupName, members) {
    var groupsNumber = Math.floor(members.length /groupSize);

    console.log(groupsNumber);

    var groupID = [];

    for (let i = 0; i < members.length; i++) {
        groupID.push(i % groupsNumber);
    }

    groupID = shuffle(groupID);

    var result = new Map();
    
    for (let i = 0; i < groupsNumber; i++) {
        result.set(groupName + "_" + i, []);

    }

    for (let j = 0; j < groupID.length; j++) {

        var groupmembers = result.get(groupName+ "_"+ groupID[j]);
        result.set(groupName+ "_"+ groupID[j], groupmembers);

    }
    //console.log(result.values());
    for (key of result.keys()){
        console.log(`${key}: ${result.get(key)}`);
    }  

}