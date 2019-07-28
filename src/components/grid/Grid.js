import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../card/Card';
// import cardList from '../data';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class SpacingGrid extends React.Component {
    constructor(props) {
        super(props);
        this.cardlick = this.cardlick.bind(this);
        this.matchedCards = [];
        this.showOnlyTwoCardsAtaTime = [];
    }
    componentWillMount() {
        let cards = ["star", "android" ,"favorite", "sentiment_very_satisfied", 
        "cake", "directions_bike", "location_on", "account_balance", "pets"   ];
        let randomizedCard = this.getRandomCardList(cards);
        this.setState(randomizedCard);
    }
    componentDidMount() {
        this.totalPairedCards = (Object.keys(this.state).length/2);
        this.props.updateCount(this.totalPairedCards, this.matchedCards.length);
    }
    getRandomCardList(cards) {
        let cardClone = [...cards];
        let cardList = cardClone.concat(cards);
        let randomized = cardList.sort(() => Math.random() - 0.5);
        let randObj = {};
        for(let i=0;i<randomized.length;i++) {
            randObj[randomized[i]+"-"+i] = {iconName:randomized[i], freeze:false, isToggleOn:false};
        }
        return randObj;
    }
    cardlick(iconName,callback) {
        let clen = this.showOnlyTwoCardsAtaTime.length;
        const {updateCount} = this.props;
        if(clen < 2) {
            this.showOnlyTwoCardsAtaTime.push({iconName, callback});
        }
        if(this.showOnlyTwoCardsAtaTime.length === 2) {
            let reset, freeze, wait;
            if(this.showOnlyTwoCardsAtaTime[0].iconName === this.showOnlyTwoCardsAtaTime[1].iconName) {
                console.log(" Matched Cards set fixed them");
                this.matchedCards.push(this.showOnlyTwoCardsAtaTime[0].iconName);
                reset = false; freeze = true; wait=0;
                updateCount(this.totalPairedCards, this.matchedCards.length);
            } else {
                reset = true; freeze = false; wait=300;
            }
            setTimeout(() => {
                this.showOnlyTwoCardsAtaTime[0].callback(reset, freeze);
                this.showOnlyTwoCardsAtaTime[1].callback(reset, freeze);
                this.showOnlyTwoCardsAtaTime = [];
            }, wait);
        }
    }
  render() {
    return (
            <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={6}>
                {Object.keys(this.state).map((index) => (
                    <Grid key={index} item xs={2}>
                        <Card 
                            cardProp={this.state[index]}
                            click={this.cardlick}>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        );
    }
}

export default SpacingGrid;