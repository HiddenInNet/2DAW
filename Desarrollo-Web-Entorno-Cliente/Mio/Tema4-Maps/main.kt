private val messages: List<MyMessage> = listOf(
    MyMessage("Hola 1", "¿Que tal?"),
    MyMessage("Hola 2", "¿Que tal?"),
    MyMessage("Hola 3", "¿Que tal?"),
    MyMessage("Hola 4", "¿Que tal?"),
    MyMessage("Hola 5", "¿Que tal?"),
    MyMessage("Hola 6", "¿Que tal?"),
    MyMessage("Hola 7", "¿Que tal?"),
    MyMessage("Hola 8", "¿Que tal?"),
    MyMessage("Hola 9", "¿Que tal?"),
    MyMessage("Hola 10", "¿Que tal?"),
    MyMessage("Hola 11", "¿Que tal?")
)

data class MyMessage(val title: String, val body: String)

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            RepasoExamenTheme {
                MyMessages(messages)
            }
        }
    }
}

@Composable
fun MyMessages(messages: List<MyMessage>) {
    LazyColumn() {
        items (messages) { message ->
            MyComponent(message = message)
        }
    }
}

@Composable
fun MyComponent(message: MyMessage) {
    Row (
        modifier = Modifier
            .padding(8.dp)
            .background(color = Color.DarkGray)
            .fillMaxWidth()
    ) {
        var contador by remember { mutableStateOf(0) }

        MyImage(contador)
        MyTexts(message)

        Button(onClick = { contador++ },
            modifier = Modifier
                .padding(start = 60.dp, top = 4.dp)
        ) {
            Text(text = "Numero de clicks $contador")
        }
    }
}

@Composable
fun MyImage(contador: Int) {

    var imagen = R.drawable.ic_launcher_foreground

    when (contador) {
        0,1,2,3 -> imagen = R.drawable.ic_launcher_foreground
        4,5,6-> imagen = R.drawable.ic_launcher_background
        7,8,9,10 -> imagen = R.drawable.ic_launcher_foreground
        else -> {
            imagen = R.drawable.ic_launcher_background
        }
    }

    Image(
        painter = painterResource(id = imagen),
        contentDescription = null,
        modifier = Modifier
            .padding(end = 8.dp)
            .clip(CircleShape)
            .background(MaterialTheme.colorScheme.primary)
            .size(64.dp)
    )
}

@Composable
fun MyTexts(message: MyMessage) {
    Column() {
        MyText(text = message.title, Color.Red)
        Spacer(modifier = Modifier.height(8.dp))
        MyText(text = message.body, Color.Blue)
    }
}

@Composable
fun MyText(text: String, color: Color) {
    Text(text = text, color = color)
}

@Preview(showBackground = false)
@Composable
fun GreetingPreview() {
    RepasoExamenTheme {
        MyMessages(messages)
    }
}