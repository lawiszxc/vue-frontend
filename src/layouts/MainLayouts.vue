<template>
  <!-- begin #page-container -->
  <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
      <!-- begin #header -->
      <div id="header" class="header navbar navbar-default navbar-fixed-top">
          <!-- begin container-fluid -->
          <div class="container-fluid">
              <!-- begin mobile sidebar expand / collapse button -->
              <div class="navbar-header">
                  <a href="index.html" class="navbar-brand"><span class="navbar-logo"></span> Color Admin</a>
                  <button type="button" class="navbar-toggle" data-click="sidebar-toggled">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
              </div>
              <!-- end mobile sidebar expand / collapse button -->

              <!-- begin header navigation right -->
              <ul class="nav navbar-nav navbar-right">
                  <li>
                      <form class="navbar-form full-width">
                          <div class="form-group">
                              <input type="text" class="form-control" placeholder="Enter keyword" />
                              <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                          </div>
                      </form>
                  </li>
                  <li class="dropdown">
                      <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle f-s-14">
                          <i class="fa fa-bell-o"></i>
                          <span class="label">5</span>
                      </a>
                      <ul class="dropdown-menu media-list pull-right animated fadeInDown">
                          <li class="dropdown-header">Notifications (5)</li>
                          <li class="media">
                              <a href="javascript:;">
                                  <div class="media-left"><i class="fa fa-bug media-object bg-red"></i></div>
                                  <div class="media-body">
                                      <h6 class="media-heading">Server Error Reports</h6>
                                      <div class="text-muted f-s-11">3 minutes ago</div>
                                  </div>
                              </a>
                          </li>
                          <li class="media">
                              <a href="javascript:;">
                                  <div class="media-left"><img src="/assets/img/user-1.jpg" class="media-object" alt="" />
                                  </div>
                                  <div class="media-body">
                                      <h6 class="media-heading">John Smith</h6>
                                      <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                      <div class="text-muted f-s-11">25 minutes ago</div>
                                  </div>
                              </a>
                          </li>
                          <li class="media">
                              <a href="javascript:;">
                                  <div class="media-left"><img src="/assets/img/user-2.jpg" class="media-object" alt="" />
                                  </div>
                                  <div class="media-body">
                                      <h6 class="media-heading">Olivia</h6>
                                      <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                      <div class="text-muted f-s-11">35 minutes ago</div>
                                  </div>
                              </a>
                          </li>
                          <li class="media">
                              <a href="javascript:;">
                                  <div class="media-left"><i class="fa fa-plus media-object bg-green"></i></div>
                                  <div class="media-body">
                                      <h6 class="media-heading"> New User Registered</h6>
                                      <div class="text-muted f-s-11">1 hour ago</div>
                                  </div>
                              </a>
                          </li>
                          <li class="media">
                              <a href="javascript:;">
                                  <div class="media-left"><i class="fa fa-envelope media-object bg-blue"></i></div>
                                  <div class="media-body">
                                      <h6 class="media-heading"> New Email From John</h6>
                                      <div class="text-muted f-s-11">2 hour ago</div>
                                  </div>
                              </a>
                          </li>
                          <li class="dropdown-footer text-center">
                              <a href="javascript:;">View more</a>
                          </li>
                      </ul>
                  </li>
                  <li class="dropdown navbar-user">
                      <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
                          <img src="/assets/img/user-13.jpg" alt="" />
                          <span class="hidden-xs">Adam Schwartz</span> <b class="caret"></b>
                      </a>
                      <ul class="dropdown-menu animated fadeInLeft">
                          <li class="arrow"></li>
                          <li><a href="javascript:;">Edit Profile</a></li>
                          <li><a href="javascript:;"><span class="badge badge-danger pull-right">2</span> Inbox</a></li>
                          <li><a href="javascript:;">Calendar</a></li>
                          <li><a href="javascript:;">Setting</a></li>
                          <li class="divider"></li>
                          <li><a href="javascript:;">Log Out</a></li>
                      </ul>
                  </li>
              </ul>
              <!-- end header navigation right -->
          </div>
          <!-- end container-fluid -->
      </div>
      <!-- end #header -->

      <!-- begin #sidebar -->
      <div id="sidebar" class="sidebar">
          <!-- begin sidebar scrollbar -->
          <div data-scrollbar="true" data-height="100%">
              <!-- begin sidebar user -->
              <ul class="nav">
                  <li class="nav-profile">
                      <div class="image">
                          <a href="javascript:;"><img src="/assets/img/user-13.jpg" alt="" /></a>
                      </div>
                      <div class="info">
                          Sean Ngu
                          <small>Front end developer</small>
                      </div>
                  </li>
              </ul>
              <!-- end sidebar user -->
              <!-- begin sidebar nav -->
              <ul class="nav">
                  <li class="nav-header">Navigation</li>
                  <li class="has-sub active">
                      <a href="javascript:;">
                          <b class="caret pull-right"></b>
                          <i class="fa fa-laptop"></i>
                          <span>Dashboard</span>
                      </a>
                      <ul class="sub-menu">
                          <li class="active"><a href="#">Dashboard v1</a></li>
                      </ul>
                  </li>
                  <li><a href="#"><i class="fa fa-calendar"></i> <span>Calendar</span></a></li>

                  <li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i
                              class="fa fa-angle-double-left"></i></a></li>
              </ul>
          </div>
      </div>
      <div class="sidebar-bg"></div>

      <div id="content" class="content">
        <router-view></router-view>
      </div>

      <div class="theme-panel">
          <a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn"><i class="fa fa-cog"></i></a>
          <div class="theme-panel-content">
              <h5 class="m-t-0">Color Theme</h5>
              <ul class="theme-list clearfix">
                  <li class="active"><a href="javascript:;" class="bg-green" data-theme="default"
                          data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body"
                          data-title="Default">&nbsp;</a></li>
                  <li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector"
                          data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a>
                  </li>
                  <li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector"
                          data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a>
                  </li>
                  <li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector"
                          data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a>
                  </li>
                  <li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector"
                          data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a>
                  </li>
                  <li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector"
                          data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black">&nbsp;</a>
                  </li>
              </ul>
              <div class="divider"></div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label double-line">Header Styling</div>
                  <div class="col-md-7">
                      <select name="header-styling" class="form-control input-sm">
                          <option value="1">default</option>
                          <option value="2">inverse</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label">Header</div>
                  <div class="col-md-7">
                      <select name="header-fixed" class="form-control input-sm">
                          <option value="1">fixed</option>
                          <option value="2">default</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label double-line">Sidebar Styling</div>
                  <div class="col-md-7">
                      <select name="sidebar-styling" class="form-control input-sm">
                          <option value="1">default</option>
                          <option value="2">grid</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label">Sidebar</div>
                  <div class="col-md-7">
                      <select name="sidebar-fixed" class="form-control input-sm">
                          <option value="1">fixed</option>
                          <option value="2">default</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label double-line">Sidebar Gradient</div>
                  <div class="col-md-7">
                      <select name="content-gradient" class="form-control input-sm">
                          <option value="1">disabled</option>
                          <option value="2">enabled</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-5 control-label double-line">Content Styling</div>
                  <div class="col-md-7">
                      <select name="content-styling" class="form-control input-sm">
                          <option value="1">default</option>
                          <option value="2">black</option>
                      </select>
                  </div>
              </div>
              <div class="row m-t-10">
                  <div class="col-md-12">
                      <a href="#" class="btn btn-inverse btn-block btn-sm" data-click="reset-local-storage"><i
                              class="fa fa-refresh m-r-3"></i> Reset Local Storage</a>
                  </div>
              </div>
          </div>
      </div>

      <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i
              class="fa fa-angle-up"></i></a>
  </div>
</template>
