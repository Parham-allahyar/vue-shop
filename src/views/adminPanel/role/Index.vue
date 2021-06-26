<template>
  <div class="style">
    <table style="width: 100%">
      <tr>
        <th>#</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jackson</td>
        <td>94</td>
         <td>94</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
    </table>
  </div>
</template>


<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}

table td {
  border: 1px solid #e7e7e7;
  padding: 20px;
}

.style {
  margin-left: 4rem;
}
th {
  margin-top: 3rem;
  background-color: #85b3be;
  padding: 10px;
}
tr:nth-of-type(odd) { 
	background: #FaFaFa; 
	}
</style>




