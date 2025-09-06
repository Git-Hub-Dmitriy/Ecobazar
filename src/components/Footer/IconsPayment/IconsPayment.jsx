import * as style from "./IconsPayment.module.scss";
import IconApplePay from "@assets/iconApplePay.svg";
import IconVisa from "@assets/iconVisa.svg";
import IconDiscover from "@assets/iconDiscover.svg";
import IconMasterCard from "@assets/iconMasterCard.svg";
import IconSecurePayment from "@assets/iconSecurePayment.svg";

export default function IconsPayment() {
  return (
    <div className={style.information__iconsPayment}>
      <IconApplePay className={style.information__iconPay} />
      <IconVisa className={style.information__iconPay} />
      <IconDiscover className={style.information__iconPay} />
      <IconMasterCard className={style.information__iconPay} />
      <IconSecurePayment className={style.information__iconSecurePayment} />
    </div>
  );
}
