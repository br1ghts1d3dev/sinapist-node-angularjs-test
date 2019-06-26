let lastSum;

const postSum = (req, res) => {
  let { firstNum, secondNum } = req.body;

  if (!firstNum || !secondNum) {
    res.status(400).send({
      message: 'No first or second number provided'
    })

    return;
  }

  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    res.status(400).send({
      message: 'Invalid number format'
    });

    return;
  }

  lastSum =  firstNum + secondNum;

  res.send({
    message: 'Success',
    result: lastSum
  });
}

// For testing last request
const getLastSum = (req, res) => {
  res.send(lastSum);
}

module.exports = {
  postSum,
  getLastSum
}