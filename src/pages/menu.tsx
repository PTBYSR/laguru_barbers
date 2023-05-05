import React from 'react'
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import MenuCard from 'components/interface/MenuCard/MenuCard';
import { menuUtils } from 'components/interface/MenuCard/MenuItems/Menu.utils'
import { yamUtils, spagUtils, soupsUtils, riceUtils, mealsUtils} from '../../utils/menu'
import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';
import InstagramIcon from 'components/icons/InstagramIcon';


const Menu = () => {
  console.log(riceUtils)
  return (
    <Main
    meta={
      <Meta title="500 CHOW - Our Menu" description="1# Lagos food delivery service" />
    }
  >
    <MenuCard items={mealsUtils} label="meals" variant='left'/>
    <MenuCard items={riceUtils} label="rice" variant='left'/>
    <MenuCard items={soupsUtils} label="soups" variant='right'/>
    <MenuCard items={spagUtils} label="spagetti" variant='left'/>
    <div className="mb-20 md:mb-10">
      <MenuCard items={yamUtils} label="yam" variant='right'/>
    </div>
    <div className="mb-32 py-32 flex gap-5 flex-col md:w-1/2">
      <Text variant="h3">Didn't see what you wanted? Talk to us</Text>
      <Button>chat with us on whatsapp</Button>
            <Button>
              chat with us on instagram
              <span>
                <InstagramIcon w="26" fill="#fff" />
              </span>
            </Button>
    </div>
  
  </Main>
  )
}

export default Menu