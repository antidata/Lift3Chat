import sbt._

object Dependencies {

  val resolutionRepos = Seq(
    "Sonatype Releases" at "https://oss.sonatype.org/content/repositories/releases",
    "Sonatype Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"
  )

  def compile(deps: ModuleID*): Seq[ModuleID] = deps map (_ % "compile")
  def provided(deps: ModuleID*): Seq[ModuleID] = deps map (_ % "provided")
  def test(deps: ModuleID*): Seq[ModuleID] = deps map (_ % "test")
  def runtime(deps: ModuleID*): Seq[ModuleID] = deps map (_ % "runtime")
  def container(deps: ModuleID*): Seq[ModuleID] = deps map (_ % "container")

  object Ver {
    val lift = "3.0-M6"
    val lift_edition = "3.0"
    val jetty = "8.1.16.v20140903"
    val akka = "2.4-M3"
  }

  // Lift
  val liftWebkit = "net.liftweb" %% "lift-webkit" % Ver.lift

  // Jetty
  val jettyWebapp = "org.eclipse.jetty" % "jetty-webapp" % Ver.jetty
  val jettyPlus = "org.eclipse.jetty" % "jetty-plus" % Ver.jetty
  val servlet = "javax.servlet" % "javax.servlet-api" % "3.0.1"

  // Misc
  val logback = "ch.qos.logback" % "logback-classic" % "1.1.2"
  val scalatest = "org.scalatest" %% "scalatest" % "2.2.1"
}
