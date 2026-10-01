import { View, Text, StyleSheet } from "react-native";

export default function CatalogDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Купити iPhone 17 Pro у Києві та Дніпрі – офіційна гарантія в Україні
      </Text>
      <Text style={styles.text}>
        Apple презентувала <Text style={styles.bold}>iPhone 17 Pro</Text> –
        смартфон для тих, хто хоче преміальне «яблуко» у зручнішому форматі. На
        відміну від великого iPhone 17 Pro Max, ця модель компактніша та легша,
        але при цьому зберігає всі ключові технології Apple. Уже сьогодні ви
        можете
        <Text style={styles.bold}>
          {" "}
          купити iPhone 17 Pro у Києві та Дніпрі{" "}
        </Text>
        з офіційною гарантією, швидкою доставкою та оплатою частинами через
        Monobank і ПриватБанк.
      </Text>
      <Text style={styles.heading}>Дизайн і дисплей</Text>
      <Text style={styles.text}>
        iPhone 17 Pro отримав дисплей
        <Text style={styles.bold}> 6.3 дюйма OLED 120 Гц </Text>– це оптимальний
        розмір для тих, хто хоче потужність і комфорт в одному корпусі. Він
        легше та зручніше в руці, ніж Pro Max, що робить його ідеальним вибором
        для щоденного використання.
      </Text>
      <Text style={styles.heading}>Потужність і пам’ять</Text>
      <Text style={styles.text}>
        Усередині – процесор
        <Text style={styles.bold}> Apple A19 Pro</Text>, створений за 2-нм
        техпроцесом. Він забезпечує неймовірну швидкість і стабільність.
        Оперативна пам’ять – до
        <Text style={styles.bold}> 12 ГБ</Text>, сховище – від
        <Text style={styles.bold}> 256 GB до 2 TB</Text>.
      </Text>
      <Text style={styles.heading}>Камери</Text>
      <Text style={styles.text}>
        iPhone 17 Pro має потрійну систему камер: головний модуль
        <Text style={styles.bold}> 48 Мп</Text>, ширококутна та телеоб’єктив. Це
        дозволяє отримати чудові фото й відео у будь-яких умовах.
      </Text>
      <Text style={styles.heading}>Купити iPhone 17 Pro в Україні</Text>
      <Text style={styles.text}>
        В інтернет-магазині
        <Text style={styles.bold}> Yellow.ua </Text>
        ви отримаєте:
      </Text>
      <Text style={styles.list}>
        • офіційну гарантію Apple в Україні{"\n\n"}• доставку 1–2 дні у Київ,
        Дніпро та по всій країні{"\n\n"}• оплату частинами Monobank і ПриватБанк
        {"\n\n"}• акції та знижки для клієнтів
      </Text>
      <Text style={styles.text}>
        Якщо ви шукаєте преміальний айфон із потужністю флагмана, але у
        компактнішому форматі – саме час
        <Text style={styles.bold}>
          {" "}
          замовити iPhone 17 Pro у Києві та Дніпрі.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 30,
    color: "#111",
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 35,
    marginBottom: 15,
    color: "#111",
  },

  text: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: "justify",
    color: "#333",
  },

  bold: {
    fontWeight: "700",
    color: "#111",
  },

  list: {
    fontSize: 17,
    lineHeight: 30,
    marginTop: 20,
    color: "#222",
  },
});
