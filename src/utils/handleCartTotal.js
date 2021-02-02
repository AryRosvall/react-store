const handleSumTotal = (cart) => cart.reduce((acc, curr) => acc + curr.price, 0)

export default handleSumTotal
