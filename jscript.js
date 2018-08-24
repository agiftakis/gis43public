<script> // cant have this
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
x = myObject.fullName();
y = myObject.lastName();
document.getElementById("demo1").innerHTML = x;
document.getElementById("demo2").innerHTML = y;
alert( x + y);
</script>
