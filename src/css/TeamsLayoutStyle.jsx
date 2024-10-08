import styled from 'styled-components'

export const TeamsLayoutSyle = styled.section `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

}

.section-1{
    margin: 50px auto 0 auto;
    bottom: 0;
}

.section-2{
    margin: 20px auto;
}

.section-1, .section-2 {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 1280px;
    box-shadow: 0 0px 5px rgba(0,0,0,0.1);
}

.section-1 .content, .section-2 .driver {
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-1 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.section-1 .car-image, .section-2 .driver-image {
    max-width: 45%;
    border-radius: 10px;
    margin-right: 20px;
}

.section-1 .text-content, .section-2 .driver-info {
    max-width: 50%;
    text-align: center;
}

.section-1 .logo, .section-2 .logo {
    display: block;
    margin: 0 auto 10px;
    max-width: 400px;
}

.section-1 h1, .section-2 h3 {
    margin: 10px 0;
    text-align: center;
}

.section-1 p, .section-2 p {
    margin: 10px 0;
    text-align: left;
}

.section-1 .audio {
    display: flex;
    align-items: center;
    margin-top: 0px;
    justify-content: center;
}

.section-1 .audio-icon {
    margin-right: 10px;
    cursor: pointer;
    font-size: 40px;
}

.section-1 .audio p{
    font-weight: 500;
}

.section-1 a {
    text-decoration: none;
    font-weight: bold;
}

.section-2 .flag {
    max-width: 20px;
    vertical-align: middle;
}

.section-2 .classification {
    text-align: center;
    margin: 20px 0;
}

.section-2 .classification p {
    text-align: center;
    margin: 5px 0;
    font-size: 18px;
    font-weight: bold;
    color: red;
}

.section-2 .stats {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.section-2 .stat {
    text-align: center;
}

.section-2 .stat h4 {
    margin: 0;
    font-size: 14px;
}

.section-2 .stat p {
    margin: 5px 0;
    font-size: 18px;
    font-weight: bold;
    color: red;
}



.drivers-title {
    text-align: center;
    margin: 40px auto 20px;
    font-size: 24px;
}

.drivers-title .mahindra {
    color: red;
}

/* ABT CUPRA */
.classification p.cupra{
    color: #004AAD;
}

.section-2 .stat p.cupra {
    color: #004AAD;
}

.drivers-title .cupra{
    color: #004AAD;
}

/* FIM ABT CUPRA */

/* PENSKE */
.classification p.penske {
    color: #CBA65F;
}

.section-2 .stat p.penske {
    color: #CBA65F;
}

.drivers-title .penske {
    color: #CBA65F;
}
/* FIM PENSKE */

/* ENVISION */
.classification p.envision {
    color: #00BE26;
}

.section-2 .stat p.envision {
    color: #00BE26;
}

.drivers-title .envision {
    color: #00BE26;
}

/* FIM ENVISION */

/* ERT */
.classification p.ert {
    color: #E9FF1B;
}

.section-2 .stat p.ert {
    color: #E9FF1B;
}

.drivers-title .ert {
    color: #E9FF1B;
}

/* FIM ERT*/

/* MASERATI */
.classification p.maserati {
    color: #001489;
}

.section-2 .stat p.maserati {
    color: #001489;
}

.drivers-title .maserati {
    color: #001489;
}

/* FIM MASERATI */

/* MCLAREN */
.classification p.mclaren {
    color: #FF8000;
}

.section-2 .stat p.mclaren {
    color: #FF8000;
}

.drivers-title .mclaren {
    color: #FF8000;
}

/* FIM MCLAREN */
.drivers-title span {
    color: black;
}

.section-2, .section-titulo {

}

.section-2.appear {
    opacity: 1;
}

.section-titulo.appear{
    opacity: 1;
}

@media screen and (max-width: 1280px){
    .section-1 {
        margin: 15px auto 0 auto;
        bottom: 0;
    }
}


@media screen and (max-width: 768px){
    .section-1 {
        max-width: 750px;
    }

    .content .car-image{
        max-width: 300px;
    }

    .section-1 .logo, .section-2 .logo {
        max-width: 300px;
    }

    .section-2{
        max-width: 750px;
    }
}

@media screen and (max-width: 600px){
    .section-1{
        margin: 10px;
        padding: 0;
    } 

    .content{
        flex-direction: column-reverse;
    }

    .driver{
        flex-direction: column;
    }
    .logo img{
        margin-left: 100px;
    }

    .driver-info .logo{
        display: none;
    }

    .description{
        display: none;
    }
}

@media screen and (max-width: 428px){
    .section-1 {
        max-width: 600px;
        margin: 15px auto 0 auto;
        bottom: 0;
    }

    .content .car-image{
        max-width: 300px;
    }

    .section-1 .logo, .section-2 .logo {
        max-width: 250px;
        padding-right: 65px;
    }

    .section-2{
        max-width: 750px;
    }

    .content{
        flex-direction: column-reverse;
    }

    .driver{
        flex-direction: column-reverse;
    }

    .stats{
        display: flex;
        gap: 1rem;
    }
}

`