const intialGuess = genereateRandNumberBetween(0, 100, props.userChoice);
const[currentGuess, setCurrentGuess] = useState({key: intialGuess, value: intialGuess});
const[pastGuesses, setpastGuesses] = useState([{key: intialGuess, value: intialGuess}]);
const currentHigh  = useRef(100);
const currentLow = useRef(1);