/// <reference types="cypress" />
it.only('equal-eql - data types', () => {
    const message1 ="1";
    const message2 =1;

    if(message1 === message2){console.log("Yes strict or deep equal")} else{console.log("Not strict equal")} //eql  // strict ,deep equal // compare value and data-type with value and data-type
    if(message1 == message2){console.log("Yes equal to")} else{console.log("Not equal to")}//equal   // equal to // compare value with value 

    expect(message1).to.equal("1");
    expect(message2).to.eql(1);
    expect(message2).to.equal(1);

    expect(message1).to.eql(message2); // will fail 
    expect(message1).to.deep.eql(message2); // will fail 
    
    expect(message1).to.equal(message2);  // will fail



});


it('equal-eql with objects', () => {
    const object1 = {name:"test"};
    const object2 = {name:"test"};

    // if(object1 === object2){console.log("Yes strict or deep equal")} else{console.log("Not strict equal")} 
    // if(object1 == object2){console.log("Yes equal to")} else{console.log("Not equal to")}

    // if(JSON.stringify(object1) === JSON.stringify(object2)){console.log("Yes strict or deep equal")} else{console.log("Not strict equal")} 
    // if(JSON.stringify(object1) == JSON.stringify(object2)){console.log("Yes equal to")} else{console.log("Not equal to")}

    // equal => compare the references and keys and values 
    // eql => compare the content equal keys and equal values 
    
    // expect({name:"test"}).to.equal({name:"test"})  // will fail 
    expect({name:"test"}).to.eql({name:"test"}) 

    // expect(object1).to.equal(object2) // will fail 
    expect(object1).to.eql(object2) 

    expect(object1).to.equal(object1);
    expect(object2).to.equal(object2);
    
    expect(object1.name).to.equal(object2.name);
    expect(object1.name).to.eql(object2.name);

    var aKeys = Object.keys(object1); // [name]
    var bKeys = Object.keys(object2); // [name]
    console.log(aKeys)

    expect(aKeys).to.eql(bKeys);
    
    const arr1 = [1,2];
    const arr2 = [1,2];

    // expect(arr1).to.equal(arr2); // will fail 
    expect(arr1).to.eql(arr2);
    
});