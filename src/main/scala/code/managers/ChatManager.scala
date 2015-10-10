package code.managers

import net.liftweb.http.RoundTripHandlerFunc
import net.liftweb.json._

case class Message(name: String, text: String)

object ChatManager {
  private var messages: List[Message] = List()
  private var users: List[RoundTripHandlerFunc] = List()
  implicit val foprmat = DefaultFormats

  def getMessages(roundTrip: RoundTripHandlerFunc): Unit = {
    if(!users.exists(_.hashCode() == roundTrip.hashCode())) {
      users = roundTrip :: users
    }
    roundTrip.send(Extraction.decompose(messages))
  }

  def newMessage(msg: Message): Unit = {
    messages = msg :: messages
    users.foreach(_.send(Extraction.decompose(msg)))
  }
}
