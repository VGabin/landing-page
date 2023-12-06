import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Group1Icon } from './Group1Icon.js';
import classes from './MacBookAir1.module.css';
import { Rectangle35Icon } from './Rectangle35Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const MacBookAir1: FC<Props> = memo(function MacBookAir1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle38}></div>
      <div className={classes.cONTACT}>CONTACT</div>
      <div className={classes.cONSEIL}>CONSEIL</div>
      <div className={classes.sERVICE}>SERVICE</div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.recherche}>Recherche...</div>
      <div className={classes.bienvenueSur}>
        <div className={classes.textBlock}>Bienvenue sur </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}></p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}></p>
        </div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper3}></p>
        </div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
      </div>
      <div className={classes.sCANNEZMOI}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label}>SCANNEZ</span>
          <span className={classes.label2}>-MOI</span>
        </p>
      </div>
      <div className={classes.rectangle39}></div>
      <div className={classes.rectangle35}>
        <Rectangle35Icon className={classes.icon2} />
      </div>
      <div className={classes.dansLeMondeDynamiqueDeLEsportO}>
        Dans le monde dynamique de l&#39;esport, où les compétitions évoluent rapidement, la recherche du partenaire de
        jeu parfait peut parfois sembler aussi complexe que le jeu lui-même. C&#39;est pourquoi nous sommes fiers de
        vous présenter la Plateforme GATHER LINK une passerelle unique qui facilite la connexion entre les joueurs
        amateurs, semi-pros, et les coachs/managers avides de découvrir de nouveaux talents.
      </div>
      <div className={classes.cOACHSMANAGERS}>COACHS/MANAGERS </div>
      <div className={classes.jOUEURS}>JOUEURS</div>
      <div className={classes.enTantQueManagerVousPouvezDeso}>
        {' '}
        En tant que manager, vous pouvez désormais découvrir des talents émergents et construire une équipe qui
        repoussera les limites de l&#39;excellence. Parcourez notre catalogue diversifié de joueurs passionnés, examinez
        leurs performances, et trouvez la combinaison parfaite de compétences pour mener votre équipe vers la victoire
      </div>
      <div className={classes.etesVousPretAFairePasserVotreJ}>
        Êtes-vous prêt à faire passer votre jeu au niveau supérieur? La Plateforme GATHER LINK est votre billet vers de
        nouvelles opportunités. Que vous soyez un joueur amateur ou semi-pro, votre prochaine équipe vous attend. Créez
        un profil qui met en valeur votre passion et vos compétences, et attirez l&#39;attention des meilleurs managers
        et coachs.
      </div>
      <div className={classes.votreProchainProdigeVousAttend}>
        {' '}
        Votre prochain prodige vous attend peut-être déjà. En tant que coach déterminé, vous avez maintenant accès à une
        communauté vibrante de joueurs avides d&#39;apprendre et de se surpasser. Explorez nos profils de joueurs,
        découvrez leur histoire, et trouvez ceux qui partageront votre vision stratégique.
      </div>
      <div className={classes.rectangle40}></div>
      <div className={classes.rectangle41}></div>
      <div className={classes.rectangle42}></div>
      <div className={classes.rectangle43}></div>
      <div className={classes.rectangle44}></div>
      <div className={classes.rectangle392}></div>
      <div className={classes.eNSAVOIRPLUS}>EN SAVOIR PLUS</div>
      <div className={classes.eNSAVOIRPLUS2}>EN SAVOIR PLUS</div>
      <div className={classes.rectangle45}></div>
      <div className={classes.rectangle47}></div>
      <div className={classes.rectangle48}></div>
      <div className={classes.rejoinsNousSurDiscordEnScannan}>Rejoins nous sur Discord en scannant ce QR code !</div>
      <div className={classes.rectangle49}></div>
    </div>
  );
});
