window.onload = function () {

    const listValues = document.getElementById("testforlist").getElementsByTagName("li");

    const paragraphvalue=document.getElementById("manupulator").innerHTML;

    QUnit.test("First Unit Test", function (assert) {




        assert.equal(listValues[0].innerHTML.trim(), "hi", "first item!");
        assert.equal(listValues[1].innerHTML.trim(), "hello", "second item!");
        assert.equal(listValues[2].innerHTML.trim(), "how", "third item!");


        assert.ok(isTermsAvailable(), "Terms And Conditions Avalailable");

        assert.equal("This is True",paragraphvalue,"Paragraph  Test!");

        ChangeParaValue("manupulator","This is True");
        const paragraphvalueChanged=document.getElementById("manupulator").innerHTML;

        assert.equal("This is True",paragraphvalueChanged,"Paragraph  Test!!");


        //console.log(elems);

    });

    


}
