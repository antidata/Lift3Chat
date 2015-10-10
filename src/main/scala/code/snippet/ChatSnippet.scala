package code.snippet

import code.managers.{Message, ChatManager}
import net.liftweb.common.Logger
import net.liftweb.http.js.JE.JsRaw
import net.liftweb.http.{RoundTripInfo, S, RoundTripHandlerFunc}
import net.liftweb.json.JsonAST.{JString, JValue}
import scala.xml.NodeSeq

class ChatSnippet extends Logger {
  def render() : NodeSeq = {
    val funcs: List[RoundTripInfo] = List("sendMessage" -> sendMessage _, "getMessages" -> sendMessage _)

    for {
      session <- S.session
    } {
      println("Adding pageFuncitonD")
      S.appendGlobalJs(JsRaw(s"var pageFunctions = ${session.buildRoundtrip(funcs).toJsCmd}").cmd)
    }
    NodeSeq.Empty
  }

  def getMessages(value : JValue, func: RoundTripHandlerFunc): Unit = {
    ChatManager.getMessages(func)
  }

  def sendMessage(value : JValue, func: RoundTripHandlerFunc): Unit = {
    import net.liftweb.json.JsonDSL._

    (value \ "name", value \ "text") match {
      case (JString(name), JString(text)) =>
        _logger.debug(s"Getting $text from $name")
        ChatManager.newMessage(Message(name, text))

      case _ =>
        _logger.debug("Error")
    }
  }
}