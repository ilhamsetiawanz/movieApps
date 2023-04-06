const style = `
<style>
    .movieContiner{
        width: 100%;
    }
    .movieItem{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 1rem 0;
    }
    
    .movie {
        width: 200px;
        padding: 1rem;
        border-radius:5px;
        background: #1a1a1a;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;
    }
    
    .movie > img{
        width: 12.4rem;
        border: 1px solid black;
    }
    
    .movie > h3{
        color: #fff;
        text-align: center;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .movie > p{
        color: #fff;
        font-size: 12px;
        text-align: center;
    }
    
    .btn-detail{
        border:none;
        background-color: #2c2c2c;
        padding: 10px 15px;
        width: 100%;
        color: #6896c7;
        font-size:14px;

        border-radius:2px;
    }
    .btn-detail:hover{
        background-color: rgba(87, 153, 239, 0.133);
    }
</style>
`;

export default style;